import React from 'react';

function Login() {
    return (
        <div className="login-container">
            <div className="contents">
                <div className="wtext">
                    Welcome Back,
                </div>
                <h1>
                    Log In!
                </h1>
                <input type="text" placeholder="Username"/>
                <input type="password"  placeholder="Password"/>
                <button >
                    Log In
                </button>
            </div>
        </div>
    )
};

export default Login;
