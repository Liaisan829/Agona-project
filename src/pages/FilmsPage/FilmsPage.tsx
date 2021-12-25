import {BaseLayout} from "../BaseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils/Utils";
import {Film} from "../../components/Film/Film";
import {ToggleSwitch} from "../../components/ui/ToggleSwitch/ToggleSwitch";
import menu from '../../images/icons/menu.svg'
import styles from "./FilmsPage.module.sass"

export const FilmsPage = observer(() => {

    const {filmStore: {films}} = useStores();

    return (
        <>
            <BaseLayout>
                <h1 className = {styles.collectionTitle}>Коллекция</h1>
                <div className={styles.switchMenu}>
                    <ToggleSwitch/>
                    <img src={menu} alt="menu"/>
                </div>
                <div className={styles.filmCollection}>
                    <div className={styles.film}>
                        {films.map(film => (
                            <div><Film key={film.id} film={film}/></div>
                        ))}
                    </div>
                </div>
            </BaseLayout>
        </>
    );
});