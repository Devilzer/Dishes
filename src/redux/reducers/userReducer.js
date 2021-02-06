const initialState = {
    users :[{
            username : "deepak",
            password : "deepak123",
            likedDishes : []
        },
        {
            username : "aman",
            password : "aman123",
            likedDishes : []
        },
        {
            username : "anand",
            password : "anand123",
            likedDishes : []
        },
        {
            username : "neha",
            password : "neha123",
            likedDishes : []
        },
        {
            username : "nikhil",
            password : "nikhil123",
            likedDishes : []
        },
        {
            username : "jay",
            password : "jay123",
            likedDishes : []
        },
        {
            username : "anil",
            password : "anil123",
            likedDishes : []
        },
        {
            username : "ankit",
            password : "ankit123",
            likedDishes : []
        },
        {
            username : "shiva",
            password : "shiva123",
            likedDishes : []
        },
        {
            username : "pankaj",
            password : "pankaj123",
            likedDishes : []
        },
    ],
    currentUser:{},
    isLoggedIn : false,
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
        case "LOGOUT_USER":
            return{
                ...state,
                isLoggedIn : false,
                currentUser : {}
            };
        case "UPDATE_USER":
            var index = state.users.findIndex(user=>user.username===action.payload.username);;
            let usersAfter = state.users;
            usersAfter[index] = action.payload;
            return{
                ...state,
                users : usersAfter
            };
        default:
            return state;
    }
};

export default reducer;