export const userLogin = ()=>{
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
    return{
        type : "LOGOUT_USER"
    };
};