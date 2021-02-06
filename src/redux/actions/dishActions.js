
export const addDish = (dish)=>{
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


