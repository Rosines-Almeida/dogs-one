import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as MnhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as AdcionarFotos } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import styles from './UserHeaderNav.module.css'
import { UseMedia } from '../../Hooks/UseMedia';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/user';


export const UserHeaderNav = () => {
    const dispatch = useDispatch();
    const mobile = UseMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const { pathname } = useLocation()

    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    return (
        <>
            {mobile &&
                <button aria-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}

                > </button>
            }

            <nav className={`${!mobile ? styles.nav : styles.navMobile} ${mobileMenu && styles.navMobileActive}`} >

                <NavLink to="/conta" end activeClassName={styles.active}>
                    <MnhasFotos />
                    {mobile && ' Minha Conta '}
                </NavLink>

                <NavLink to="estatisticas"
                    activeClassName={styles.active}>
                    <Estatisticas />
                    {mobile && 'Estatisticas'}
                </NavLink>

                <NavLink to="postar"
                    activeClassName={styles.active}>
                    <AdcionarFotos /> {mobile && 'Adcionar Fotos'
                    }</NavLink>
                <button onClick={() => dispatch(userLogout())}>
                    <Sair /> {mobile && 'Sair'} </button>
            </nav>
        </>
    )
}
