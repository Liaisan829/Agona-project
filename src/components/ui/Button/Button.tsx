import React from "react";
import styles from './Button.module.sass';

export const Button = (props) => {
    return (
        <div className={styles.button}>
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