import React from "react";
import styles from './Input.module.sass'

export const Input = (props) => {

    return(
        <div className = {styles.input}>
            <input
                type = {props.type}
                value = {props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}