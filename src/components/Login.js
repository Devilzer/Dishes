import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userLogin, setCurrentUser } from "../redux/actions";
import { showNotification } from "../config/noty";

function Login() {
    const [value, setValue] = useState({
        username :"",
        password :""
    });
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    const handleClick = ()=>{
        //checking if any field is empty while submit
        if(value.username==="" || value.password===""){
            showNotification("please fill all the fields");
            return;
        }
        //search for user
        var index = users.findIndex(user=>user.username===value.username);
        if(index===-1){
            showNotification("invalid username or password");
            return;
        }
        else{
            //match password
            if(users[index].password===value.password){
                dispatch(userLogin());
                dispatch(setCurrentUser(users[index]));
                console.log("logged in");
            }
            else{
                showNotification("invalid username or password");
                return;
            }
        }
    };

    return (
        <div className="login-container">
            <div className="contents">
                <div className="wtext">
                    Welcome Back,
                </div>
                <h1>
                    Log In!
                </h1>
                <input type="text" value={value.username} onChange={(e)=>setValue({...value,username:e.target.value})} placeholder="Username"/>
                <input type="password" value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})} placeholder="Password"/>
                <button onClick={handleClick}>
                    Log In
                </button>
            </div>
        </div>
    )
};

export default Login;
