import styles from './residencies.module.scss'
import { SwiperSlider } from './components/SwiperSlider/SwiperSlider'

 export const Residencies = () => {
    return (
     <section className={styles.residencies}>
        <div className={`${styles.residenciesContainer} paddings innerWidh`}>
            <div className={`${styles.residenciesContainerHeader} flexColStart`}>
             <span className={`orangeText`}>Best Choices</span>
             <span className={`primaryText`}>Popular Recidencies</span>
            </div>

                <SwiperSlider />  
                    
        </div>
     </section>
    )
}

