import {Input} from "../components/ui/Input/Input";
import {Button} from '../components/ui/Button/Button';
import React, {useEffect, useState} from "react";


export const AuthCont = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true)
    const [inputError, setInputError] = useState('')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (email.length > 0 || password.length > 0) {
            setFormValid(true);

        } else {
            setFormValid(false)
        }
    }, [email, password])

    const validateEmail = (event: any) => {
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

    const validatePassword = (event: any) => {
        const password = event.target.value
        const input = event.target
        setPassword(password)

        if (password.length < 6) {
            setPasswordError(true)
            input.classList.add('error')
        } else {
            setPasswordError(false)
            input.classList.remove('error')
        }
    };

    const onButtonClick = (e: any) => {
        const button = e.target;
        if (emailError || passwordError) {
            setFormValid(false);
            button.classList.add('block')
            setInputError('Неверные пароль или логин')
        } else {
            setFormValid(true);
            button.classList.remove('block')
            setInputError('')
        }
    }

    return (
        <div className="authCont">
            <Input type="email" value={email} onChange={validateEmail} placeholder="Адрес электронной почты"/>
            <Input type="password" value={password} onChange={validatePassword} placeholder="Пароль"/>
            {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
            <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText = "Войти"/>
        </div>
    );
}