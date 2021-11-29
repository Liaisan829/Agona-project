import {FilmModel} from "../model/FilmModel";
import {observable} from "mobx";
import girl from '../images/films/girl.svg';
import godzilla from '../images/films/godzilla.svg';
import father from '../images/films/father.svg';
import drunk from '../images/films/drunk.svg';
import mank from '../images/films/mank.svg';
import midsommar from '../images/films/midsommar.svg';
// import minari from '../images/films/minari.svg';
import soul from '../images/films/soul.svg';
import nomadland from '../images/films/nomadland.svg';

export class FilmStore {
    @observable films: Array<FilmModel> = [
        {
            id: 1,
            rating: 6.9,
            img: "../images/films/minari.svg",
            title: 'minari'
        },
        {
            id: 2,
            rating: 6.6,
            img: {midsommar},
            title: 'midsommar'
        },
        {
            id: 3,
            rating: 7.1,
            img: {mank},
            title: 'mank'
        },
        {
            id: 4,
            rating: 6.8,
            img: {girl},
            title: 'girl'
        },
        {
            id: 5,
            rating: 7.3,
            img: {nomadland},
            title: 'nomadland'
        },
        {
            id: 6,
            rating: 7.9,
            img: {father},
            title: 'father'
        },
        {
            id: 7,
            rating: 7.5,
            img: {drunk},
            title: 'drunk'
        },
        {
            id: 8,
            rating: 8.3,
            img: {soul},
            title: 'soul'
        },
        {
            id: 9,
            rating: 6.1,
            img: {godzilla},
            title: 'godzilla'
        }
    ]

}