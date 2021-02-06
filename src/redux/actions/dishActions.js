import { showNotification } from "../../config/noty";

export const addDish = (dish)=>{
    showNotification("Dish Added");
    return{
        type : "ADD_DISH",
        payload : dish
    };
};

export const updateVote = (dish)=>{
    return{
        type : "UPDATE_VOTE",
      payload : dish
    };
};


