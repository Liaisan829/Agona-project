import React from "react";
import './LoginInput.css'

export const Input = (props) => {

    return(
        <div className = "input">
            <input
                type = {props.type}
                value = {props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}