import {BaseLayout} from "../BaseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils/Utils";
import {Film} from "../../components/Film";
import "./FilmsPage.css"
import {ToggleSwitch} from "../../components/ui/ToggleSwitch/ToggleSwitch";
import {NavLink} from "react-router-dom";

export const FilmsPage = observer(() => {

    const {filmStore: {films}} = useStores();
    console.log(films);

    return (
        <>
            {/*collection of films is here*/}
            <BaseLayout>
                <div className="films-clicker">
                    <h1>Коллекция</h1>
                    <ToggleSwitch/>
                    <div className="filmsCollection">
                        <div className="film">
                            {films.map(film => (
                                <Film key={film.id} film={film}/>
                            ))}
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </>
    );
});