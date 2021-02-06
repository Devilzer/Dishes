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
        default:
            return state;
    }
};

export default reducer;