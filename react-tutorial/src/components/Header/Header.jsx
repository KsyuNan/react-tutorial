import styles from './header.module.scss'
import logo from '../../public/logo.png'

const Header = () => {
    return (
        <section className={styles.header}>
            <div className={`${styles.headerContainer} paddings flexCenter innerWidth`}>
               <img src={logo} alt= 'logo' width={100}/>
               <nav className={`${styles.headerMenu} flexCenter`}>
                   <a href="">Residencies</a>
                   <a href="">Our value</a>
                   <a href="">Contact us</a>
                   <a href="">Get started</a>
                    <button className={`button`} href="">Contact</button>
               </nav>
            </div>
        </section>
        
    )
}

export default Header
