import axios from "axios";

import { getToken } from '../utils/Commons';

const REST_API_URL = 'http://localhost:8081/api/';

var config = {
    headers : {'Content-Type' : 'application/json'} 
}

class ReactService{

    setToken(){
        //userStorage token ordan al
       var  token = getToken();
        if(token){
           //headers Authorization burda çağır
            config.headers['Authorization'] = 'Bearer ' + token;

        }else{
            console.error('User is not Logged in');
        }
        
    }

    getService(requestUrl, params){
        this.setToken();
        let urlParameters = Object.entries(params).map(e => e.join('=')).join('&');

        return axios
        .get(REST_API_URL + requestUrl + (urlParameters ? '?' + urlParameters : ''),  config)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
    }

    getServiceId(requestUrl, id){
        this.setToken();
        return axios
        .get(REST_API_URL + requestUrl  + "/" + id)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }

    postService(requestUrl, body){
        this.setToken();
        return axios
        .post(REST_API_URL + requestUrl, body)
        .then((response) => {
            console.log(response);
            
            return response.data
        })
    }


    putService(requestUrl, body){
        this.setToken();
        return axios
        .put(REST_API_URL + requestUrl , body , config)
        .then(response => {
            console.log(response);

            return response.data
        })
    }

    deleteService(requestUrl,id){
        this.setToken();
        return axios
        .delete(REST_API_URL + requestUrl + "/" + id);
    }
} 
export default new ReactService();
