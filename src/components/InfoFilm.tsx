import {FilmModel} from "../model/FilmModel";
import {FC} from "react";
import plus from '../images/plus.svg';
import './InfoFilm.css'

interface FilmProps {
    infoFilm: FilmModel;
}

export const InfoFilm: FC<FilmProps> = ({infoFilm}) => {

    return (
        <>
            <div className="whole-film">
                <img src={infoFilm.img} className="whole-film-img" alt="img"/>
                <div className="info-film">
                    <h1>{infoFilm.title}</h1>
                    <div className = "year-rating">
                        <p className="info-film-year">{infoFilm.year}</p>
                        <p className="info-film-rating">{infoFilm.rating}</p>
                    </div>
                    <div className="will-watch">
                        <img src={plus} className="plus" alt="plus"/>
                        <p className="will-watch-p">Буду смотреть</p>
                    </div>
                    <p className="info-film-desc">{infoFilm.description}</p>
                    <div className="genres">
                        <p>Фантастика</p>
                        <p>Боевик</p>
                        <p>Триллер</p>
                    </div>
                </div>
            </div>
        </>
    );
}