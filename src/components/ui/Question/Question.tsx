import React from "react";
import './Question.css'

function Question(props) {

    // state = {
    //     questions: [
    //         {field1: 'Еще не зарегистрированы?', field2: 'Вход'}
    //     ]
    // }
    //
    return (
        <div className="question">
            {/*<p>{this.state.questions[0].field1}</p>*/}
            {/*<a href="#">{this.state.questions[0].field2}</a>*/}
            <p>{props.line.lineQuestion}</p>
        </div>
    );

}

export default Question;