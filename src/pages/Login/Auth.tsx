import React from 'react';
import logo from "../../images/logo.svg";
import {AuthCont} from '../../containers/AuthCont';
import './logo-style.css'

// import {AuthContWithStore} from "../../containers/AuthContWithStore";

function Auth() {

    return (
        <div className="auth">
            {/*кнопка когда активируется не меняет цвет даже на дефолтный черный*/}
            <img src={logo} className="logo" alt="logo"/>
            <AuthCont/>
            {/*<AuthContWithStore/>*/}
        </div>
    );
}

export default Auth;