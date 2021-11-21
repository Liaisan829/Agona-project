import React, {useEffect, useState} from "react";

function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true)
    const [inputError, setInputError] = useState('')
    const [formValid, setFormValid] = useState(false)

//начинаем что-то вводить в инпуты и кнопка активируется
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
    }

    const validatePassword = (event: any) => {
        const password = event.target.value
        const input = event.target
        setPassword(password)

        if (password.length < 3 || password.length > 10) {
            setPasswordError(true)
            input.classList.add('error')
        } else {
            setPasswordError(false)
            input.classList.remove('error')
        }
    }

//при клике на кнопук проверяем валидность инпутов и если тчо выводим ошибку
    const onButtonClick = (e: any) => {
        const button = e.target;
        if (emailError || passwordError) {
            setFormValid(false);
            button.classList.add('block')
            setInputError('неверные пароль или логин')
        } else {
            setFormValid(true);
            button.classList.remove('block')
            setInputError('')
        }
    }

    return (
        <div className="signIn">
            <form className="signIn">
                <input
                    type="text"
                    placeholder="Адрес электронной почты"
                    value={email}
                    onChange={validateEmail}

                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={validatePassword}

                />
                {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
                <button disabled={!formValid} onClick={onButtonClick} type="submit">Войти</button>
            </form>
        </div>
    );
}

export default AuthForm;
