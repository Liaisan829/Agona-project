import {MainContainer} from "./MainContainer";
import {observer} from "mobx-react";
import {useStores} from "../utils/Utils";
import {Film} from "../components/Film";
import "./FilmsPage.css"

export const FilmsPage = observer(() => {

    const {filmStore: {films}} = useStores();
    console.log(films);

    return (
        <>
            {/*collection of films is here*/}
            <MainContainer>
                <div className="films-clicker">
                    <h1>Коллекция</h1>
                    <div className="buttons">
                        <button className='will-watch'>Буду смотреть</button>
                        <button className="watched">Просмотрено</button>
                    </div>

                    <div className="filmsCollection">
                        <div className="film">
                            {films.map(film => (
                                <Film key={film.id} film={film}/>
                            ))}
                        </div>
                    </div>
                </div>
            </MainContainer>
        </>
    );
});