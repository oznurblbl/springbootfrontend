import { lazy } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));

export default{
  Login,
  SignUp
};
 