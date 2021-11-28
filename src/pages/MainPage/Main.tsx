import logo from '../../images/logo.svg';
import agona from '../../images/agona.svg'
import React from "react";
import './Main.css'
import {BaseLayout} from "../BaseLayout/BaseLayout";


function Main() {
    return (
        <BaseLayout>
            <img src={logo} className="App-logo" alt="logo"/>
            <img src={agona} className = "agona" alt="agona"/>
        </BaseLayout>
    );
}

export default Main;