import {Input} from "../components/ui/Input/Input";
import {Button} from '../components/ui/Button/Button';
import React, {useEffect, useState} from "react";
import {Question} from "../components/ui/Question/Question";
import {useHistory} from "react-router";


export const AuthCont = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true)
    const [inputError, setInputError] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false)
    const history = useHistory();

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

    const onButtonClick = () => {
        if (emailError || passwordError) {
            setFormValid(false);
            setInputError('Неверные пароль или логин')
        } else {
            setFormValid(true);
            setInputError('')
            setIsRegistered(true)
            setTimeout(() => {
                setIsRegistered(false)
            }, 3000);
            setTimeout(() => {
                history.push("/collection");
            }, 3001)
        }
    }

    return (
        <div className="authCont">
            <Input type="email" value={email} onChange={validateEmail} placeholder="Адрес электронной почты"/>
            <Input type="password" value={password} onChange={validatePassword} placeholder="Пароль"/>
            {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
            {isRegistered ?
                <div id="floatingBarsG">
                    <div className="blockG" id="rotateG_01"/>
                    <div className="blockG" id="rotateG_02"/>
                    <div className="blockG" id="rotateG_03"/>
                    <div className="blockG" id="rotateG_04"/>
                    <div className="blockG" id="rotateG_05"/>
                    <div className="blockG" id="rotateG_06"/>
                    <div className="blockG" id="rotateG_07"/>
                    <div className="blockG" id="rotateG_08"/>
                </div> :
                <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Регистрация"/>
            }
            <Question question='Еще не зарегистрированы?' href='/registration' hrefText='Регистрация'/>
        </div>
    );
}