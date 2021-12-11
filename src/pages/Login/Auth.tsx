import React from 'react';
import logo from "../../images/logo.svg";
// import {AuthCont} from '../../containers/AuthCont';
import {AuthContWithStore} from "../../containers/AuthContWithStore";
import styles from './Logo-style.module.sass'

function Auth() {

    return (
        <div className={styles.auth}>
            <img src={logo} className={styles.logo} alt="logo"/>
            {/*<AuthCont/>*/}
            <AuthContWithStore/>
        </div>
    );
}

export default Auth;