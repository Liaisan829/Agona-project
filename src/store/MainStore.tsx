import {FilmStore} from "./FilmStore";

class MainStore{
    //подключаем все строы сюда чтоб в одном месте все были

    filmStore:FilmStore;

    constructor() {
        this.filmStore = new FilmStore();
    }
}

export const mainStore = new MainStore();
export default MainStore;