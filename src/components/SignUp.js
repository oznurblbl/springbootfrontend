import React from 'react'
import Container from '@material-ui/core/Container';
import  Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core';
import CssBaseline  from '@material-ui/core/CssBaseline';
import  Avatar  from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import  Grid  from '@material-ui/core/Grid';
import  TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  Typography  from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({

    paper:{
        marginTop: theme.spacing(8),
        display : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form:{
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin:theme.spacing(3,0,2),
    },

}))

function SignUp() {
    const classes = useStyles();
        return (
           <Container component="main" maxWidth="xs">
               <CssBaseline />
               <div className={classes.paper}> 
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5"> 
                        Sign Up
                    </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs = {12} sm={6}>
                                    <TextField 
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant = "outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                    variant = "outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label = "Password"
                                        autoComplete = "current-password"
                                    />
                                </Grid>
                            
                                <Grid item xs={12} >
                                <FormControlLabel
                                    control = {<Checkbox value="allawExtraEmails" color="primary" />}
                                    label = "I want to receive inspiration, marketing promotion and updates via email."
                                /> 
                                </Grid>
                            </Grid>
                            <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid>
                                    <Link href="/sign-in" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                     </div>
                     <Box mt={5}>
                        <Copyright/>
                     </Box>
           </Container>
        )
    }

export default SignUp;