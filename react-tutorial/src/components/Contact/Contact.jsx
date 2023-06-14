import styles from './contact.module.scss'
import contact from '../../public/contact.jpg'
import { ContactModes } from './components/ContactModes/ContactModes'

export const Contact = () => {
    return (
     <section className={styles.contacts}>
        <div className={`${styles.contactsContainer} paddings innerWidth flexCenter`}>
        <div className={`${styles.contactsContainerTitle} flexColStart`}>
            <span className={`orangeText`}>Our Contact Us</span>
            <span className={`primaryText`}>Easy to contact us</span>
            <span className={`secondaryText`}>We always ready to help by providijng the best services for you. We beleive a <br/> good blace to live can make your life better</span>
        <ContactModes/>
        </div>

        <div className={`${styles.contactsContainerPicture} flexColEnd`}>
           <div className={`image-container`}>
            <img src={contact} alt="" />
           </div>
        </div>
        </div>
     </section>
    )
}