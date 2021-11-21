import React from 'react';
import './LoginButton.css'

class LoginButton extends React.Component {
    //должно быть действие не на онклик а на заполнение инпутов по сути если инпуты прошли валидацию то активируем
    handleChange = (event) => {
        const button = event.target;
        this.setState({
            'isDisabled': false
        })
        button.classList.add('active');
    }

    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true
        }
    }

    render() {
        return (
            <div className="login">
                <button onClick={this.handleChange} disabled = {this.state["isDisabled"]} className="loginButton">Войти</button>
            </div>
        )
    }
}

export default LoginButton;