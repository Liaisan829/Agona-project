import React from 'react';
import logo from "../../images/logo.svg";
// import {RegisCont} from "../../containers/RegisCont";
import {RegisContWithStore} from "../../containers/RegisContWithStore";
import styles from './Logo-style.module.sass'


function Regis() {

    return (
        <div className={styles.regis}>
            <img src={logo} className={styles.logo} alt="logo"/>
            {/*<RegisCont/>*/}
            <RegisContWithStore/>
        </div>
    );
}

export default Regis;