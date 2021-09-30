import React from 'react'
import  Link  from '@material-ui/core/Link';
import Typography  from '@material-ui/core/Typography';

export default function Copyright() {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright ©'}
                <Link color = "inherit" href="https://www.google.com/">
                    Your Website
                </Link>{''}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}
