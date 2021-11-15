import React from 'react';
import "./LoginInput.css"

function LoginInputs() {
    //осталось при неверном сделать красный бордер и когда просто так кнопу сделать синей
    //и еще ревью кода

    const checkEmail = (event) => {
        const inputValue = event.target.value;
        const errorEmail = "anastasia@mail.com";
        if(inputValue === errorEmail){
           console.log('Неверные логин или пароль');
        }
    }

    const checkPass = (event) => {
        const inputValue = event.target.value;
        const errorEmail = "qwerty008";
        if(inputValue === errorEmail){
            console.log('Неверные логин или пароль');
        }
    }

    return (
        <div className="input">
            <input onInput={checkEmail} type="email" className="loginInput" placeholder="Адрес электронной почты"/>
            <input onInput={checkPass} type="password" className="loginInput" placeholder="Пароль"/>
        </div>
    );
}

export default LoginInputs;