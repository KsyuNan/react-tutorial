import styles from './footer.module.scss'
import logo2 from '../../public/logo2.png'
export const Footer = () => {
    return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer} paddings innerWidth flexCenter`}>
        <div className={`${styles.footerContainerLogo} flexColStart`}>
            <img src={logo2} alt="logo" />
            <span>Our vision is to make all people <br/>
                  the best place to live for them.</span>
        </div>

        <div className={`${styles.footerContainerInfo} flexColStart`}>
            <span className={`primaryText`}>Information</span>
            <span className={`secondaryText`}>145 New York, FL 5467, USA</span>
         
                <div className={`${styles.footerContainerInfoMenu} flexCenter`}>
            
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                 
                </div>
         

        </div>
      </div>
    </footer>
    )
}