import ReactService from './ReactService';

const userEndpoint = "user";


class UserService {
    
    getUsers(params){
        return ReactService.getService(userEndpoint, params);
     }

    getUsersId(id){
        return ReactService.getServiceId(userEndpoint,id);
     }

    postUser({userName ='' , email = '', password = ''}){
        return ReactService.postService(userEndpoint, {userName,email, password });
    }

    putUser({userName ='', email ='', password =''}){
        return ReactService.putService(userEndpoint, {userName, email, password})
    }

    deleteUser(id){
        return ReactService.deleteService(userEndpoint,id);
    }
}
export default new UserService();