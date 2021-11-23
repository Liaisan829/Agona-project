import {Input} from "../components/ui/Input/Input";
import LoginButton from "../components/ui/Button/LoginButton";
import React, {useState} from "react";


export const AuthCont = () => {
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
     const [emailError, setEmailError] = useState(true);
    // const [passwordError, setPasswordError] = useState(true)
    // const [inputError, setInputError] = useState('')
    // const [formValid, setFormValid] = useState(false)


    const validateEmail = (event:any) =>{
        const email = event.target.value
        const input = event.target

        setEmail(email)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError(true)
            input.classList.add('error')
        } else {
            setEmailError(false)
            input.classList.remove('error')
        }
    };

    return(
        <div className = "authCont">
            <Input type = "email" value = {email} onChange = {validateEmail} placeholder = "Адрес электронной почты"/>
            <LoginButton/>
        </div>
    );
}