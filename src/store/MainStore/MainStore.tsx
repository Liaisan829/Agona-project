import {FilmStore} from "../FilmStore/FilmStore";
import AuthStore from "../AuthStore/AuthStore";

class MainStore{

    filmStore:FilmStore;
    authStore:AuthStore;

    constructor() {
        this.filmStore = new FilmStore();
        this.authStore = new AuthStore();
    }
}

export const mainStore = new MainStore();
export default MainStore;