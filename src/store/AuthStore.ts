import {action, observable, override} from "mobx";

export default class AuthStore {

    @observable email: string;
    @observable password: string;
    @observable emailError: boolean;
    @observable passwordError: boolean;
    @observable inputError: string;
    @observable formValid: boolean;
    @observable isRegistered: boolean;

    constructor() {
        this.email = '';
        this.password = '';
        this.emailError = true;
        this.passwordError = true;
        this.inputError = '';
        this.formValid = false;
        this.isRegistered = false;
    }

    @action
    setFormValid = (value: boolean): void => {
        this.formValid = value;
    }

    @action
    setEmail = (value: string): void => {
        this.email = value;
    }

    @action
    setPassword = (value: string): void => {
        this.password = value;
    }

    @action
    setEmailError = (value: boolean): void => {
        this.emailError = value;
    }

    @action
    setPasswordError = (value: boolean): void => {
        this.passwordError = value;
    }

    @action
    setInputError = (value: string): void => {
        this.inputError = value;
    }

    @action
    setIsRegistered = (value: boolean): void => {
        this.isRegistered = value;
    }


    @action
    validateEmail = (event: any) => {
        const emailValue = event.target.value
        const input = event.target

        this.setEmail(emailValue)
        console.log(this.email);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(emailValue).toLowerCase())) {
            this.setEmailError(true)
            input.classList.add('error')
        } else {
            this.setEmailError(false)
            input.classList.remove('error')
        }
    }
}