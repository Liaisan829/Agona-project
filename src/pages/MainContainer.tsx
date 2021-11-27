import {FC, ReactNode} from "react";
import {NavLink} from 'react-router-dom';
import logo from '../images/short-logo.svg'
import profile from '../images/profile.svg'
import loupe from '../images/loupe.svg';
import plus from '../images/plus.svg'
import round from '../images/round.svg'
import './Header.css'

interface MainContainerProps {
    children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({children}) => {
    return (
        <>
            <header className='header'>

                <nav className='left-side'>
                    <div className = "collection-round">
                        <img src={round} alt="round"/>
                        <NavLink to='/collection' exact className='collection' activeClassName=''>
                            Коллекция
                        </NavLink>
                    </div>
                    <div className='add-with-plus'>
                        <img src={plus} className = "plus" alt="plus"/>
                        <p className='add'>Добавить</p>
                    </div>
                </nav>

                <img src={logo} alt="short-logo"/>

                <nav className='right-side'>
                    <img src={loupe} className = "loupe" alt="loupe"/>
                    <p className='search'>Поиск</p>
                    <img src={profile} className = "profile" alt="profile"/>
                </nav>


            </header>

            <main>
                {children}
                {/*здесь будет как раз та коллекция фильмов которые будут лежать в стор*/}
            </main>
        </>
    )
}
