import React from 'react'

import { Link } from 'react-router-dom';
import { LOGIN, USERLIST } from '../configure/routing/Routes';
import { getUser, removeUserSession } from '../utils/Commons';

function Dashboard(props) {

    const user = getUser();

    const handleLogout = () => {
        removeUserSession();
        props.history.push(LOGIN.path);
    }

    return (
        <div>
            {/* user?.userName = user ? user.userName : '' */ }
            Welcome {user?.userName}!
            <br/>
            <br/>       
            <input type = "button" onClick = {handleLogout} value = "Logout" />
            
            <Link to = { USERLIST.path} variant="body2"> User List</Link>  
            
        </div>
    );
} 
export default Dashboard;