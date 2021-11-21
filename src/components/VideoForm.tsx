import React, {useEffect, useState} from 'react';
import './ui/Button/LoginButton.css'
import './ui/Input/LoginInput.css'


function VideoForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email may not be empty');
    const [passwordError, setPasswordError] = useState('Password may not be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {//если какая то из ошибок возникла то форма невалидна
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);
    //первый параметр функци второй массив зависимостей если какой то из элементов массива изменяется то функция срабатывает

    const blurHandler = (event) => {
        switch (event.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Wrong email')
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 5) {
            setPasswordError('Too short');
            if (!event.target.value) {
                setPasswordError('Password may not be empty');
            }
        } else {
            setPasswordError('');
        }
    }

    return (
        <div className="div">
            <form className='form'>
                {(emailDirty && emailError) && <div style = {{color:'red'}}>{emailError}</div>}

                <input
                    className='input loginInput'
                    // onBlur={e => blurHandler(e)}
                    onChange={emailHandler}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Адрес электронной почты"
                />
                {(passwordDirty && passwordError) && <div style = {{color:'red'}}>{passwordError}</div>}

                <input
                    className='input loginInput'
                    // onBlur={e => blurHandler(e)}
                    onChange={passwordHandler}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Пароль"
                />
                {/*<div>{(this.state["error"])}</div> проверить всегда ли будет показывать ошибку*/}

                <button
                    disabled={!formValid}
                    type='submit'
                    className='login loginButton'>Войти
                </button>
            </form>
        </div>
    );
}

export default VideoForm;