import React, {useState} from "react";
import './Question.css'

function Question() {

    const [field1, setField1] = useState('Еще не зарегистрированы?');
    const [field2, setField2] = useState('Регистрация');
    const [isRegistered, setRegistered] = useState(false);

    let handleQuestion = () => {
        if (!isRegistered) {
            setField1('Есть логин для входа?')
            setField2('Войти')
            setRegistered(true);
        } else {
            setField1('Еще не зарегистрированы?');
            setField2('Регистрация')
            setRegistered(false);
        }
    }

    return (
        <div className="question">
            <p>{field1}</p>
            <a href="/registration" onClick={handleQuestion}>{field2}</a>
        </div>
    );
}

export default Question;