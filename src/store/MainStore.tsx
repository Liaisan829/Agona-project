import {FilmStore} from "./FilmStore";
import AuthStore from "./AuthStore";

class MainStore{
    //подключаем все сторы сюда чтоб в одном месте все были

    filmStore:FilmStore;
    authStore:AuthStore;

    constructor() {
        this.filmStore = new FilmStore();
        this.authStore = new AuthStore();
    }
}

export const mainStore = new MainStore();
export default MainStore;