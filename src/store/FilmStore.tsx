import {FilmModel} from "../model/FilmModel";
import {makeObservable, observable} from "mobx";
import girl from '../images/films/girl.svg';
import godzilla from '../images/films/godzilla.svg';
import father from '../images/films/father.svg';
import drunk from '../images/films/drunk.svg';
import mank from '../images/films/mank.svg';
import midsommar from '../images/films/midsommar.svg';
import minari from '../images/films/minari.svg';
import soul from '../images/films/soul.svg';
import nomadland from '../images/films/nomadland.svg';

export class FilmStore {
    @observable films: Array<FilmModel> = [
        {
            id: 1,
            rating: 6.9,
            img: minari,
            title: 'Минари'
        },
        {
            id: 2,
            rating: 6.6,
            img: midsommar,
            title: 'Солцнестояние'
        },
        {
            id: 3,
            rating: 7.1,
            img: mank,
            title: 'Манк'
        },
        {
            id: 4,
            rating: 6.8,
            img: girl,
            title: 'Девушка, пода...'
        },
        {
            id: 5,
            rating: 7.3,
            img: nomadland,
            title: 'Земля кочевни...'
        },
        {
            id: 6,
            rating: 7.9,
            img: father,
            title: 'Отец'
        },
        {
            id: 7,
            rating: 7.5,
            img: drunk,
            title: 'Еще по одной'
        },
        {
            id: 8,
            rating: 8.3,
            img: soul,
            title: 'Душа'
        },
        {
            id: 9,
            rating: 6.1,
            img: godzilla,
            title: 'Годзилла'
        }
    ]

}