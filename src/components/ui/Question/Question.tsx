import React from "react";
import './Question.css'

class Question extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            field1: 'Еще не зарегистрированы?',
            field2: 'Регистрация',
            isRegistered: false
        }
    }

    handleQuestion = () => {
        if(!this.state["isRegistered"]){
            this.setState({
                'field1': 'Есть логин для входа?',
                'field2': 'Войти',
                'isRegistered': true
            });
        }
        else{
            this.setState({
                field1: 'Еще не зарегистрированы?',
                field2: 'Регистрация',
                'isRegistered': false
            })
        }
    }

    render() {
        return (
            <div className="question">
                <p>{this.state["field1"]}</p>
                <a href="#" onClick = {this.handleQuestion} >{this.state["field2"]}</a>
            </div>
        );
    }

}

export default Question;