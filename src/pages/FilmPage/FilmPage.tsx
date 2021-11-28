import {BaseLayout} from "../BaseLayout/BaseLayout";
import {observer} from "mobx-react";
import {useStores} from "../../utils/Utils";
import plus from '../../images/plus.svg'
import minari from '../../images/films/minari.svg';
import './FilmPage.css'

export const FilmPage = observer(() => {
    const {filmStore: films} = useStores();

    return (
        <>
            <BaseLayout>
                <div className="film">

                    <img className="filmImage" src={minari} alt=""/>

                    <div className="film-info">
                        <h5>Minari</h5>
                        <div className="year-rating">
                            <h6>2020</h6>
                            <p>7.8</p>
                        </div>
                        <div className="will-watch-plus">
                            <img src={plus} alt="plus"/>
                            <p>Буду смотреть</p>
                        </div>
                        <p>Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл
                            Кристофера Нолана.</p>
                        <div className="genres">
                            <p>Фантастика</p>
                            <p>Боевик</p>
                            <p>Триллер</p>
                        </div>
                    </div>
                </div>
            </BaseLayout>
            {/*exact film page is here*/}
        </>
    );
});