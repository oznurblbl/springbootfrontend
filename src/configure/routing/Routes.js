import Dashboard from '../../components/Dashboard';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import Users from '../../components/Users';

import { USER_LIST_PATH, DASH_BOARD, LOG_IN_PATH, SIGN_UP_PATH } from '../paths/Paths';

export const LOGIN = {
    component : Login,
    path: LOG_IN_PATH,
    isPrivate : false
};

export const SIGNUP = {

    component: SignUp,
    path: SIGN_UP_PATH,
    isPrivate : false
};

export const DASHBOARD = {
    component: Dashboard,
    path: DASH_BOARD,
    isPrivate : false
};

export const USERLIST = {

    component: Users,
    path : USER_LIST_PATH,
    isPrivate : false
};

export default [USERLIST ,DASHBOARD ,LOGIN ,SIGNUP];