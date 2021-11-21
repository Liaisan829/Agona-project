import React from 'react';
import LoginInputs from "../components/ui/Input/LoginInputs";
import LoginButton from "../components/ui/Button/LoginButton";
import logo from "../images/logo.svg";
import Question from "../components/ui/Question/Question";
import AuthForm from "../components/AuthForm";

function Auth() {

    return (
        <div className="auth">
            <img src={logo} className="App-logo" alt="logo"/>
            {/*<LoginInputs/>*/}
            {/*<LoginButton/>*/}
            {/*<Form/>*/}
            <AuthForm/>
            <Question/>
        </div>
    );
}

export default Auth;