import React from 'react';
// import LoginInputs from "../components/ui/Input/LoginInputs";
// import LoginButton from "../components/ui/Button/LoginButton";
import logo from "../images/logo.svg";
import Question from "../components/ui/Question/Question";
import RegisForm from '../components/RegisForm'
import './loginPageStyle.css';


function Regis() {

    return (
        <div className="regis">
            <img src={logo} className="App-logo" alt="logo"/>
            {/*<LoginInputs/>*/}
            {/*<LoginButton/>*/}
            {/*<Form/>*/}
            <RegisForm/>
            <Question/>
        </div>
    );
}

export default Regis;