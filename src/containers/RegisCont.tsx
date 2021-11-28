import {Input} from "../components/ui/Input/Input";
import {Button} from "../components/ui/Button/Button";
import {Question} from "../components/ui/Question/Question";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {Loading} from "../components/ui/Loading/Loading";

export const RegisCont = () => {

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [password1Error, setPassword1Error] = useState(true);
    const [password2Error, setPassword2Error] = useState(true);
    const [formValid, setFormValid] = useState(false);
    const [inputError, setInputError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if (email.length > 0 || password1.length > 0 || password2.length > 0) {
            setFormValid(true);

        } else {
            setFormValid(false)
        }
    }, [email, password1, password2])

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
            setInputError('');
        }
    }

    const validatePassword1 = (event: any) => {
        const password = event.target.value
        const input = event.target
        setPassword1(password)

        if (password.length < 6) {
            setPassword1Error(true)
            input.classList.add('error')
        } else {
            setPassword1Error(false)
            input.classList.remove('error')
            setInputError('')
        }
    }

    const validatePassword2 = (event: any) => {
        const password = event.target.value
        setPassword2(password)
        if (password !== password1) {
            setPassword2Error(true)
            setInputError('Пароли не совпадают')
        } else {
            setPassword2Error(false)
            setInputError('');
        }
    }

    const onButtonClick = () => {
        if (emailError) {
            setFormValid(false);
            setInputError('Неверный email')
        } else if (password1Error || password2Error) {
            setFormValid(false);
            setInputError('Неверный пароль')
        } else {
            setFormValid(true);
            setInputError('')
            setIsRegistered(true)
            setTimeout(() => {
                setIsRegistered(false)
                history.push("/collection")
            }, 3000, 3001);

        }
    }

    return (
        <div className="regisCont">
            <Input type="email" value={email} onChange={validateEmail} placeholder="Адрес электронной почты"/>
            <Input type="password" value={password1} onChange={validatePassword1} placeholder="Пароль"/>
            <Input type="password" value={password2} onChange={validatePassword2} placeholder="Повторите пароль"/>
            {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
            {isRegistered ?
                <Loading/> :
                <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Регистрация"/>
            }
            <Question question='Есть логин для входа?' href='/authorization' hrefText='Войти'/>
        </div>
    );
};