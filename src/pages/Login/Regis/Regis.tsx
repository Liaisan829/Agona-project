import React from 'react';
import logo from "../../../images/icons/logo.svg";
import {RegisContWithStore} from "../../../containers/RegisCont/RegisContWithStore";
import styles from '../Logo-style.module.sass'


function Regis() {

    return (
        <div className={styles.regis}>
            <img src={logo} className={styles.logo} alt="logo"/>
            <RegisContWithStore/>
        </div>
    );
}

export default Regis;