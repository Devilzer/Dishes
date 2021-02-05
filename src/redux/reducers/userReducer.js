const initialState = {
    users :[{
            username : "deepak",
            password : "deepak123"
        },
        {
            username : "aman",
            password : "aman123"
        },
        {
            username : "anand",
            password : "anand123"
        },
        {
            username : "neha",
            password : "neha123"
        },
        {
            username : "nikhil",
            password : "nikhil123"
        },
        {
            username : "jay",
            password : "jay123"
        },
        {
            username : "anil",
            password : "anil123"
        },
        {
            username : "ankit",
            password : "ankit123"
        },
        {
            username : "shiva",
            password : "shiva123"
        },
        {
            username : "pankaj",
            password : "pankaj123"
        },
    ],
    currentUser:{},
    isLoggedIn : false
};

const reducer =  (state = initialState, action)=>{
    switch (action.type) {
        case "LOGIN_USER":
            return{
                ...state,
                isLoggedIn : true
            };
        case "SET_CURR_USER":
            return{
                ...state,
                currentUser : action.payload
            };
        default:
            return state;
    }
};

export default reducer;