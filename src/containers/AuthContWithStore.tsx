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
                password1,
                emailError,
                password1Error,
                inputError,
                formValid,
                isRegistered,
                setFormValid,
                setInputError,
                setIsRegistered,
                validateEmail,
                validatePassword1
            }
    } = useStores();

    const history = useHistory();

    useEffect(() => {
        if (email.length > 0 || password1.length > 0) {
            setFormValid(true);

        } else {
            setFormValid(false)
        }
    }, [email, password1])

    const onButtonClick = () => {
        if (emailError || password1Error) {
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
            <Input type="email" value={email} onChange={validateEmail} placeholder="Адрес электронной почты"/>
            <Input className = "last-input" type="password" value={password1} onChange={validatePassword1} placeholder="Пароль"/>
            {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
            {isRegistered ?
                <Loading/> :
                <Button type="submit" disabled={!formValid} onClick={onButtonClick} buttonText="Регистрация"/>
            }
            <Question question='Еще не зарегистрированы?' href='/registration' hrefText='Регистрация'/>
        </div>
    );
})