import styles from './header.module.scss'
import logo from '../../public/logo.png'
import { BiMenuAltRight } from 'react-icons/bi'

const Header = () => {
    return (
        <section className={styles.header}>
            <div className={`${styles.headerContainer} paddings flexStart innerWidth`}>
               <img src={logo} alt= 'logo' width={100}/>
               <nav className={`${styles.headerContainerMenu} flexCenter`}>
                   <a href="">Residencies</a>
                   <a href="">Our value</a>
                   <a href="">Contact us</a>
                   <a href="">Get started</a>
                    <button className={`button`} href="">Contact</button>
               </nav>
            </div>
            <div className={`${styles.headerIcon}`}>
              <BiMenuAltRight size={30}/>
            </div>
        </section>
    )
}

export default Header
