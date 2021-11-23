import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function Question() {

    const [question, setQuestion] = useState('Еще не зарегистрированы?');
    const [href, setHref] = useState('/registration');
    const [hrefText, setHrefText] = useState('Регистрация');
    // const [isRegistered, setRegistered] = useState(false);

    let handleQuestion = () => {
        if (hrefText === 'Регистрация') {
            // setRegistered(true);
            setQuestion('Есть логин для входа?')
            setHrefText('Войти')
            setHref('/authorization');
        } else {
            setQuestion('Еще не зарегистрированы?');
            setHrefText('Регистрация')
            setHref('/registration');
        }
    }

    return (
        <div className="question">
            <p>{question}</p>
            <NavLink to={href} onClick = {handleQuestion}>
                {hrefText}
            </NavLink>
        </div>
    );
}

export default Question;