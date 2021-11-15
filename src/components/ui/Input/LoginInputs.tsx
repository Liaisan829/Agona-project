import React from 'react';
import "./LoginInput.css"

class LoginInputs extends React.Component {
    //осталось при неверном сделать красный бордер и когда просто так кнопу сделать синей
    //и еще ревью кода

    checkEmail = (event) => {
        const inputValue = event.target.value;
        const errorEmail = "anastasia@mail.com";
        if (inputValue === errorEmail) {
            console.log('Неверные логин или пароль');
        }
    }


    checkPass = (event) => {
        const inputValue = event.target.value;
        const errorEmail = "qwerty008";
        if (inputValue === errorEmail) {
            console.log('Неверные логин или пароль');
        }
    }

    render() {
        return (
            <div className="input">
                <input onInput={this.checkEmail} type="email" className="loginInput"
                       placeholder="Адрес электронной почты"/>
                <input onInput={this.checkPass} type="password" className="loginInput" placeholder="Пароль"/>
            </div>
        );
    }
}

export default LoginInputs;