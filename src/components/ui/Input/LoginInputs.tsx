import React from 'react';
import './LoginInput.css'

function LoginInputs() {
    //осталось когда просто так кнопу сделать синей
    //и еще ревью кода /^([\w.%+-]+)@([\w-]+\.)+([\w]

    let checkEmail = (event) => {
        const inputValue = event.target.value;
        const input = event.target;
        const errorEmail = "anastasia@mail.com";
        if (inputValue === errorEmail) {
            input.classList.add('error');
            console.log('Неверные логин или пароль');
        } else {
            input.classList.remove('error');
        }
    }


    let checkPass = (event) => {
        const inputValue = event.target.value;
        const input = event.target;
        // const errorEmail = "qwerty008";
        if (inputValue.length < 6) {
            input.classList.add('error');
            console.log('Неверные логин или пароль');
        } else {
            input.classList.remove('error');
        }
    }

    return (
        <div className="input">
            <input onInput={checkEmail} type="email" className="loginInput"
                   placeholder="Адрес электронной почты"/>
            <input onInput={checkPass} type="password" className="loginInput" placeholder="Пароль"/>
        </div>
    );
}

export default LoginInputs;