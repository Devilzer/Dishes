const initialState = {
    dish :[]
};

const reducer =  (state = initialState, action)=>{
    switch (action.type) {
        case "ADD_DISH":
            return{
                ...state,
                dish : [...state.dish,action.payload]
            };
        case "UPDATE_VOTE":
            const index = state.dish.findIndex(dish=>dish.id===action.payload.id);
            let dishAftAdd = state.dish;
            dishAftAdd[index] = action.payload;
            return{
                ...state,
                dish : dishAftAdd
            };

        default:
            return state;
    }
};

export default reducer;