import {action, makeObservable, observable, override} from "mobx";

export default class AuthStore {

    email = '';
    password1 = '';
    password2 = '';
    emailError = true;
    password1Error = true;
    password2Error = true;
    inputError = '';
    formValid = false;
    isRegistered = false;

    constructor() {
        makeObservable(this, {
            email: observable,
            password1: observable,
            password2: observable,
            emailError: observable,
            password1Error: observable,
            password2Error: observable,
            inputError: observable,
            formValid: observable,
            isRegistered: observable,
            setFormValid: action,
            setEmailError: action,
            setIsRegistered: action,
            setPassword1Error: action,
            setPassword2Error: action,
            setInputError: action,
            setPassword1: action,
            setPassword2: action,
            setEmail: action,
            validateEmail: action,
            validatePassword1: action,
            validatePassword2: action,
        })
    }

    setFormValid = (value: boolean): void => {
        this.formValid = value;
    }

    setEmail = (value: string): void => {
        this.email = value;
    }

    setPassword1 = (value: string): void => {
        this.password1 = value;
    }

    setPassword2 = (value: string): void => {
        this.password2 = value;
    }

    setEmailError = (value: boolean): void => {
        this.emailError = value;
    }

    setPassword1Error = (value: boolean): void => {
        this.password1Error = value;
    }

    setPassword2Error = (value: boolean): void => {
        this.password2Error = value;
    }

    setInputError = (value: string): void => {
        this.inputError = value;
    }

    setIsRegistered = (value: boolean): void => {
        this.isRegistered = value;
    }

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

    validatePassword1 = (event: any) => {
        const password = event.target.value
        const input = event.target
        this.setPassword1(password)

        if (password.length < 6) {
            this.setPassword1Error(true)
            input.classList.add('error')
        } else {
            this.setPassword1Error(false)
            input.classList.remove('error')
        }
    }

    validatePassword2 = (event: any) => {
        const password = event.target.value
        this.setPassword2(password)
        if (password !== this.password1) {
            this.setPassword2Error(true)
            this.setInputError('Пароли не совпадают')
        } else {
            this.setPassword2Error(false)
            this.setInputError('');
        }
    }
}