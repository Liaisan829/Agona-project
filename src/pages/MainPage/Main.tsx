import logo from '../../images/logo.svg';
import agona from '../../images/agona.svg'
import React from "react";
import {BaseLayout} from "../BaseLayout/BaseLayout";
import styles from './Main.module.sass'


function Main() {
    return (
        <BaseLayout>
            <img src={logo} className={styles.appLogo} alt="logo"/>
            <img src={agona} className = {styles.agona} alt="agona"/>
        </BaseLayout>
    );
}

export default Main;