import React from 'react';
import logo from "../../images/logo.svg";
// import {AuthCont} from '../../containers/AuthCont';
import './logo-style.css'
import {AuthContWithStore} from "../../containers/AuthContWithStore";

function Auth() {

    return (
        <div className="auth">
            <img src={logo} className="logo" alt="logo"/>
            {/*<AuthCont/>*/}
            <AuthContWithStore/>
        </div>
    );
}

export default Auth;