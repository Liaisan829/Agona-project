import {NavLink} from "react-router-dom";
import React from "react";
import './Question.css'

export const Question = (props) => {
  return(
      <div className = "question">
          <p>{props.question}</p>
          <NavLink className = 'a' to={props.href} >
              {props.hrefText}
          </NavLink>
      </div>
  );
};