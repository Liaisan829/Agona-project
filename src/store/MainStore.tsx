import {UserStore} from "./UserStore";

class MainStore{
    //подключаем все строы сюда чтоб в одном месте все были

    userStore:UserStore;

    constructor() {
        this.userStore = new UserStore();
    }
}

export const mainStore = new MainStore();
export default MainStore;