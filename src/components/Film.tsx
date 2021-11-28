import {FilmModel} from "../model/FilmModel";
import {FC} from "react";
import {NavLink} from "react-router-dom";
import '../pages/FilmsPage/FilmsPage.css'

interface FilmProps {
    film: FilmModel;
}

export const Film: FC<FilmProps> = ({film}) => {
    return (
        <>
            <div className="filmRating">{film.rating}</div>
            <NavLink to={`/collection/${film.id}`} className="filmImg">
                <div className = "filmImg"/>
            </NavLink>
            <div className="filmTitle">{film.title}</div>
        </>
    );
};