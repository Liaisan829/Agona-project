import React from "react";
import './LoginButton.css';

export const Button = (props) => {
    return (
        <div className="button">
            <button
                type={props.type}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.buttonText}
            </button>
        </div>
    );
};