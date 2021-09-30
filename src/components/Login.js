import React, { useState } from 'react';
import Container  from '@material-ui/core/Container';
import Avatar  from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Copyright from './Copyright';
import authService from '../services/AuthService';
import { setUserSession } from '../utils/Commons';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
   
  }));

function Login(props) {
    
        const [loading , setLoading] = useState(false);
        const userName = useFormInput('');
        const password = useFormInput('');
        const [error, setError] = useState(null);

        const handleLogin = () => {

            //auth login() çağır
            //login oluyorsa dashboard'a yok hayır olmuyorsa error
            //authService.login(userName.value, password.value)
            setError(null);
            setLoading(true);
            authService.login(userName.value, password.value).then(response =>{
                setLoading(false);
                setUserSession(response.token, response);
                //history.push('/digersayfa'): geçerli sayfadan diğerine geçmek için kullanılır. 
                props.history.push('/dashboard');
            }).catch(error => {
                setLoading(false)
                if(error.response.status === 401) {
                    setError(error.response.data.error);
                }
                else {
                    setError("Something went wrong. Please try again later.");
                }
            })
            
        }                                                                                                                                        


        const classes = useStyles(); 
        

        return (
            <Container component = "main" maxWidth="xs">
                <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                {...userName}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="userName"
                                autoComplete="userName"
                                autoFocus
                            />
                           <TextField
                                {...password}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                           />
                           {error && <><small style= {{color: 'red'}}>{error}</small><br /></>}<br/>
                           <FormControlLabel
                                control ={<Checkbox value="remember" color="primary" />}
                                label ="Remember Me"
                           />
                           <Button
                           value ={loading ? 'Loading...' : 'Login'}
                           onClick = {handleLogin}
                           disabled = {loading}
                           type = "submit"
                           fullWidth
                           variant="contained"
                           color="primary"
                           className={classes.submit}>
                           Sign In
                           </Button>
                           <Grid container>
                               <Grid item xs>
                                   <Link href="#" variant="body2">
                                       Forgot password?
                                   </Link>
                               </Grid>
                               <Grid item>
                                    <Link href="/sign-up" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                               </Grid>
                           </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright/>
                    </Box>
               
            </Container>
    
        
        );
    }

    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);

        const handleChange = e =>{
            setValue(e.target.value);
        }
        return{ value, onChange: handleChange}
}
export default Login;
