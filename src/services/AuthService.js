import axios from "axios";

const API_URL = "http://localhost:8081/api/";
//Authentication Service

// The service uses Axios for HTTP requests and Local Storage for user information & JWT.
// It provides following important methods:

class AuthService{

    // login(): POST {username, password} & save JWT to Local Storage
    login(userName, password){
    console.log(userName + "-" + password);
        return axios
        .post(API_URL + "auth/signin", {userName, password})
        .then((response) => {
            console.log(response);

            if(response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            
            return response.data;
        });
    }

    // logout(): remove JWT from Local Storage
    logout(){
        localStorage.removeItem("user");
    }

    // register(): POST {username, email, password}
    register(userName,email, password){
        return axios.post(API_URL + "auth/signup", {
            userName,
            email,
            password,
        });
    }
}
export default new AuthService();