import { showNotification } from "../../config/noty";

export const userLogin = ()=>{
    showNotification("Login Success");
    return{
        type : "LOGIN_USER"
    };
};
export const setCurrentUser = (user)=>{
    return{
        type : "SET_CURR_USER",
        payload : user
    };
};
export const logoutUser = ()=>{
    showNotification("Log Out Success");
    return{
        type : "LOGOUT_USER"
    };
};

export const updateUser = (user)=>{
    return{
        type : "UPDATE_USER",
        payload : user
    };
};