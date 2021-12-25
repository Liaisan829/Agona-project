import {FilmModel} from "../../model/FilmModel";
import {FC} from "react";
import {NavLink} from "react-router-dom";
import styles from './Film.module.sass'

interface FilmProps {
    film: FilmModel;
}

export const Film: FC<FilmProps> = ({film}) => {

    return (
        <>
            <div className={styles.filmRating}>{film.rating}</div>
            <NavLink to={`/collection/${film.id}`} className={styles.filmImg}>
                <img src={film.img} alt="cvg"/>
            </NavLink>
            <div className={styles.filmTitle}>{film.title}</div>
        </>
    );
}