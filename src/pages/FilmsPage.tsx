import {MainContainer} from "./MainContainer";

export const FilmsPage = () => {
    return (
        <>
            {/*collection of films is here*/}
            <MainContainer>
                <div className="films-clicker">
                    <h1>Коллекция</h1>
                    <div className="buttons">
                        <button className = 'will-watch'>Буду смотреть</button>
                        <button className = "watched">Просмотрено</button>
                    </div>
                </div>
            </MainContainer>
        </>
    );
};