import {Input} from "../components/ui/Input/Input";
import {Button} from '../components/ui/Button/Button';
import React, {useEffect} from "react";
import {Question} from "../components/ui/Question/Question";
import {useHistory} from "react-router";
import {Loading} from "../components/ui/Loading/Loading";
import {useStores} from "../utils/Utils";
import {observer} from "mobx-react";


export const AuthContWithStore = observer(() => {

    const {
        authStore:
            {
                email,
                password,
                emailError,
                passwordError,
                inputError,
                formValid,
                isRegistered,
                setFormValid,
                setEmail,
                setPassword,
                setInputError,
                setPasswordError,
                setIsRegistered,
                setEmailError,
                validateEmail
            }
    } = useStores();

    const history = useHistory();

    useEffect(() => {
        if (email.length > 0 || password.length > 0) {
            setFormValid(true);

        } else {
            setFormValid(false)
        }
    }, [email, password])

    const validateEmailV = (event: any): void => {
        console.log(event.target.value);
        validateEmail(event);
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
                history.push("/collection")
            }, 3000, 3001);

        }
    }

    return (
        <div className="authCont">
            <Input type="email" value={email} onChange={validateEmailV} placeholder="Адрес электронной почты"/>
            <Input type="password" value={password} onChange={validatePassword} placeholder="Пароль"/>
            {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
            {isRegistered ?
                <Loading/> :
                <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Регистрация"/>
            }
            <Question question='Еще не зарегистрированы?' href='/registration' hrefText='Регистрация'/>
        </div>
    );
})