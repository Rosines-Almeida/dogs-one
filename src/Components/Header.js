import React from 'react'
import { Link } from 'react-router-dom'
import styles from  './Header.module.css'
import { ReactComponent as Dog } from '../Assets/dogs.svg';
 
import { UserContext } from '../Hooks/UserContext'


export const Header = () => {
    const { data } = React.useContext(UserContext);
    console.log('dat', data)
    
    return (
        <div className={styles.header}>
           <nav className={`${styles.nav} container`}>
               <Link  className={styles.logo} to="/"  aria-label="dogs-home"><Dog/></Link>|
               {data
                    ? <Link className={styles.login} to="/conta"> {data.nome}
                    </Link>
                    : <Link className={styles.login} to="/login"> Login _Criar</Link>
                }
           </nav>
        </div>
    )
}
