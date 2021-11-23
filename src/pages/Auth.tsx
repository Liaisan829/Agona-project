import React from 'react';
import logo from "../images/logo.svg";
import Question from "../components/ui/Question/Question";
import {AuthCont} from '../containers/AuthCont';
// import AuthForm from "../components/AuthForm";
import './loginPageStyle.css';


function Auth() {

    return (
        <div className="auth">
            <img src={logo} className="App-logo" alt="logo"/>
            {/*<AuthForm/>*/}
            <AuthCont/>
            <Question/>
        </div>
    );
}

export default Auth;