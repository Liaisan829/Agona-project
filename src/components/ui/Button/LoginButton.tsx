import React from 'react';
import './LoginButton.css';

class LoginButton extends React.Component {

    handleChange = () => {
        console.log('pressed button')
    }

    render() {

        return (
            <div className="login">
                <button onClick={this.handleChange} className="loginButton">Войти</button>
            </div>
        )
    }
}

export default LoginButton;