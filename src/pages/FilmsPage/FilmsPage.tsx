import {BaseLayout} from "../BaseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils/Utils";
import {Film} from "../../components/Film";
import "./FilmsPage.css"
import {ToggleSwitch} from "../../components/ui/ToggleSwitch/ToggleSwitch";
import menu from '../../images/menu.svg'
import {NavLink} from "react-router-dom";

export const FilmsPage = observer(() => {

    const {filmStore: {films}} = useStores();

    return (
        <>
            {/*collection of films is here*/}
            <BaseLayout>
                <h1 className = "collectionTitle">Коллекция</h1>
                <div className="switch-menu">
                    <ToggleSwitch/>
                    <img src={menu} alt="menu"/>
                </div>
                <div className="filmCollection">
                    <div className="film">
                        {films.map(film => (
                            <div><Film key={film.id} film={film}/></div>

                        ))}
                    </div>

                </div>
            </BaseLayout>
        </>
    );
});