import React from 'react';
import LoginInputs from "../components/ui/Input/LoginInputs";
import LoginButton from "../components/ui/Button/LoginButton";
import logo from "../images/logo.svg";
import Question from "../components/ui/Question/Question";
import './Auth.css'


const line = {
    lineQuestion:'line'
}

function Auth() {

    return (
        <div className="auth">
            <img src={logo} className="App-logo" alt="logo"/>
            <LoginInputs/>
            <LoginButton/>
            <Question line = {line}/>
        </div>
    )
}

export default Auth;