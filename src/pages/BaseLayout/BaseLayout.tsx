import {FC, ReactNode} from "react";
import {NavLink} from 'react-router-dom';
import logo from '../../images/short-logo.svg'
import profile from '../../images/profile.svg'
import loupe from '../../images/loupe.svg';
import plus from '../../images/plus.svg'
import round from '../../images/round.svg'
import './BaseLayout.css'

interface MainContainerProps {
    children: ReactNode;
}

export const BaseLayout: FC<MainContainerProps> = ({children}) => {
    return (
        <>
            <header className='header'>
                <div className="headerCont">
                    <nav className='left-side'>
                        <div className="collection-round">
                            <NavLink to='/collection' exact className='collection' activeClassName='active'>
                                <img src={round} alt="round"/>
                                <p className="collectionText">Коллекция</p>
                            </NavLink>
                        </div>
                        <div className='add-with-plus'>
                            <img src={plus} className="plus" alt="plus"/>
                            <p className='add'>Добавить</p>
                        </div>
                    </nav>

                    <NavLink to = {`/collection`}>
                        <img src={logo} className="short-logo" alt="short-logo"/>
                    </NavLink>

                    <nav className='right-side'>
                        <img src={loupe} className="loupe" alt="loupe"/>
                        <p className='search'>Поиск</p>

                        <ul className="drop-down">
                            <li><img src={profile} className="profile" alt="profile"/>
                                <ul className="submenu">
                                    <li><NavLink to={`/authorization`}>Вход</NavLink></li>
                                    <li><NavLink to={`/registration`}>Регистрация</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

            <main>
                <div className="main-container">
                    {children}
                </div>
            </main>
        </>
    )
}
