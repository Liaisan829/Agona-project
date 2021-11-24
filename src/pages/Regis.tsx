import React from 'react';
import logo from "../images/logo.svg";
import {RegisCont} from "../containers/RegisCont";
import './logo-style.css'


function Regis() {

    return (
        <div className="regis">
            <img src={logo} className="logo" alt="logo"/>
            <RegisCont/>
        </div>
    );
}

export default Regis;