import {FilmModel} from "../../model/FilmModel";
import {observable} from "mobx";
import girl from '../../images/films/girl.svg';
import godzilla from '../../images/films/godzilla.svg';
import father from '../../images/films/father.svg';
import drunk from '../../images/films/drunk.svg';
import mank from '../../images/films/mank.svg';
import midsommar from '../../images/films/midsommar.svg';
import minari from '../../images/films/minari.svg';
import soul from '../../images/films/soul.svg';
import nomadland from '../../images/films/nomadland.svg';

export class FilmStore {
    @observable films: Array<FilmModel> = [
        {
            id: 1,
            rating: 6.9,
            img: minari,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Минари'
        },
        {
            id: 2,
            rating: 6.6,
            img: midsommar,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Солцнестояние'
        },
        {
            id: 3,
            rating: 7.1,
            img: mank,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Манк'
        },
        {
            id: 4,
            rating: 6.8,
            img: girl,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Девушка, подающая надежды'
        },
        {
            id: 5,
            rating: 7.3,
            img: nomadland,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Земля кочевников'
        },
        {
            id: 6,
            rating: 7.9,
            img: father,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Отец'
        },
        {
            id: 7,
            rating: 7.5,
            img: drunk,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Еще по одной'
        },
        {
            id: 8,
            rating: 8.3,
            img: soul,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Душа'
        },
        {
            id: 9,
            rating: 6.1,
            img: godzilla,
            year: 2020,
            description: "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.",
            title: 'Годзилла'
        }
    ]

}