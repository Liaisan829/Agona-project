import React, {useEffect, useState} from 'react';


function RegisForm() {
    let [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [password1Error, setPassword1Error] = useState(true);
    const [password2Error, setPassword2Error] = useState(true);
    const [formValid, setFormValid] = useState(false);
    const [inputError, setInputError] = useState('');

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
            setInputError('Неверный емэил')
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
            setInputError('неверный пароль')
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

    const onButtonClick = (e: any) => {
        if (emailError) {
            setFormValid(false);
            setInputError('Неверный email')
            // button.classList.add('block')
        } else if (password1Error || password2Error) {
            setFormValid(false);
            setInputError('Неверный пароль')
        } else {
            setFormValid(true);
            //button.classList.remove('block')
            setInputError('')
        }
    }

    return (
        <div className='login' id='login'>
            <form className='login'>
                <input onChange={validateEmail} value={email} type="email" placeholder='Адрес электронной почты'/>
                <input onChange={validatePassword1} value={password1} type="password" placeholder='Пароль'/>
                <input onChange={validatePassword2} value={password2} type="password" placeholder='Повторите пароль'/>
                {(inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
                <button onClick={onButtonClick} disabled={!formValid}>Регистрация</button>
            </form>
        </div>
    );
}

export default RegisForm;