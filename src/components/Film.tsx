import {FilmModel} from "../model/FilmModel";
import {FC} from "react";
import {NavLink} from "react-router-dom";
import './Film.css'

interface FilmProps {
    film: FilmModel;
}

export const Film: FC<FilmProps> = ({film}) => {

    return (
        <>
            <div className="filmRating">{film.rating}</div>
            <NavLink to={`/collection/${film.id}`} className="filmImg">
                <img src={film.img} alt="cvg"/>
            </NavLink>
            <div className="filmTitle">{film.title}</div>
        </>
    );
}