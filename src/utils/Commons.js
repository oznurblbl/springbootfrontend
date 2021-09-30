//return the user data from the session storage
export const getUser = () =>{
    const useStr = sessionStorage.getItem('user');
    console.log(useStr);
    if(useStr) 
    return JSON.parse(useStr);
    else 
    return null;
} 

//return the token from the session storage
export const getToken = () =>{
    return sessionStorage.getItem('token') || null
}

//remove the token and user from the session storage
export const removeUserSession = () =>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}

//set the token and user from the session storage
export const setUserSession = (token , user)  =>{

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
} 