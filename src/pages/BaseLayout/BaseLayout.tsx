import {FC, ReactNode} from "react";
import {NavLink} from 'react-router-dom';
import logo from '../../images/short-logo.svg'
import profile from '../../images/profile.svg'
import loupe from '../../images/loupe.svg';
import plus from '../../images/plus.svg'
import round from '../../images/round.svg'
import styles from './BaseLayout.module.sass'

interface MainContainerProps {
    children: ReactNode;
}

export const BaseLayout: FC<MainContainerProps> = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerCont}>
                    <nav className={styles.leftSide}>
                        <div className={styles.collectionRound}>
                            <NavLink to='/collection' exact className={styles.collection} activeClassName={styles.active}>
                                <img src={round} alt="round"/>
                                <p className={styles.collectionText}>Коллекция</p>
                            </NavLink>
                        </div>
                        <div className={styles.addWithPlus}>
                            <img src={plus} className={styles.plus} alt="plus"/>
                            <p className={styles.add}>Добавить</p>
                        </div>
                    </nav>

                    <NavLink to = {`/`}>
                        <img src={logo} className={styles.shortLogo} alt="short-logo"/>
                    </NavLink>

                    <nav className={styles.rightSide}>
                        <img src={loupe} className={styles.loupe} alt="loupe"/>
                        <p className={styles.search}>Поиск</p>

                        <ul className={styles.dropDown}>
                            <li><img src={profile} className={styles.profile} alt="profile"/>
                                <ul className={styles.submenu}>
                                    <li><NavLink to={`/authorization`}>Вход</NavLink></li>
                                    <li><NavLink to={`/registration`}>Регистрация</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className={styles.mainContainer}>
                    {children}
                </div>
            </main>
        </>
    )
}
