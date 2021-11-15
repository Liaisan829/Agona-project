import React from 'react';
import './LoginButton.css';

function LoginButton() {

    function handleChange() {
        console.log('pressed button')
    }

    return (
        <div className="login">
            <button onClick={handleChange} className="loginButton">Войти</button>
        </div>
    )

}

export default LoginButton;