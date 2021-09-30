import React from 'react'
import { Link } from 'react-router-dom';
import { LOG_IN_PATH, SIGN_UP_PATH } from '../configure/paths/Paths';


function Menu() {
    return (
        <div>
            <p>
                <Link to={LOG_IN_PATH}>Login</Link>
            </p>
            <p>
                <Link to={SIGN_UP_PATH}>Sign up</Link>
            </p>
        </div>
    )
}
export default Menu;