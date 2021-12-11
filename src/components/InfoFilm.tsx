import {FilmModel} from "../model/FilmModel";
import {FC} from "react";
import plus from '../images/plus.svg';
import styles from './InfoFilm.module.sass'

interface FilmProps {
    infoFilm: FilmModel;
}

export const InfoFilm: FC<FilmProps> = ({infoFilm}) => {

    return (
        <>
            <div className={styles.wholeFilm}>
                <img src={infoFilm.img} className={styles.wholeFilmImg} alt="img"/>
                <div className={styles.infoFilm}>
                    <h1>{infoFilm.title}</h1>
                    <div className = {styles.yearRating}>
                        <p className={styles.infoFilmYear}>{infoFilm.year}</p>
                        <p className={styles.infoFilmRating}>{infoFilm.rating}</p>
                    </div>
                    <div className={styles.willWatch}>
                        {/*посмотреть откуда идет плюс*/}
                        <img src={plus} className="plus" alt="plus"/>
                        {/*тоже посмотреть*/}
                        <p className="will-watch-p">Буду смотреть</p>
                    </div>
                    <p className={styles.infoFilmDesc}>{infoFilm.description}</p>
                    <div className={styles.genres}>
                        <p>Фантастика</p>
                        <p>Боевик</p>
                        <p>Триллер</p>
                    </div>
                </div>
            </div>
        </>
    );
}