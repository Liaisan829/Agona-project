import React from 'react';
import logo from "../../../images/icons/logo.svg";
import {AuthContWithStore} from "../../../containers/AuthCont/AuthContWithStore";
import styles from '../Logo-style.module.sass'

function Auth() {

    return (
        <div className={styles.auth}>
            <img src={logo} className={styles.logo} alt="logo"/>
            <AuthContWithStore/>
        </div>
    );
}

export default Auth;