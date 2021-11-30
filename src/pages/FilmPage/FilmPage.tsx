import {BaseLayout} from "../BaseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils/Utils";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {FilmModel} from "../../model/FilmModel";
import {InfoFilm} from "../../components/InfoFilm";

interface Params {
    id: string;
}

export const FilmPage = observer(() => {
    const {id} = useParams<Params>();
    const [infoFilm, setInfoFilm] = useState<FilmModel>();
    const {filmStore: {films}} = useStores();

    useEffect(() => {
        const infoFilm = films.find(film => film.id === +id);

        setInfoFilm(infoFilm);
    }, [id, films]);


    return (
        <>
            <BaseLayout>
                <div className="film-page">
                    {infoFilm && (
                        <div><InfoFilm infoFilm={infoFilm}/></div>
                    )}
                </div>
            </BaseLayout>
            {/*exact film page is here*/}
        </>
    );
});


