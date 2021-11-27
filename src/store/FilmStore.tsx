import {FilmModel} from "../model/FilmModel";
import {observable} from "mobx";
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
            rating: 6.9,
            img: {minari},
            title: 'hgv'
        },
        {
            rating: 6.6,
            img: {midsommar},
            title: 'hgv'
        },
        {
            rating: 7.1,
            img: {mank},
            title: 'hgv'
        },
        {
            rating: 6.8,
            img: {girl},
            title: 'hgv'
        },
        {
            rating: 7.3,
            img: {nomadland},
            title: 'hgv'
        },
        {
            rating: 7.9,
            img: {father},
            title: 'hgv'
        },
        {
            rating: 7.5,
            img: {drunk},
            title: 'hgv'
        },
        {
            rating: 8.3,
            img: {soul},
            title: 'hgv'
        },
        {
            rating: 6.1,
            img: {godzilla},
            title: 'hgv'
        }
    ]

}