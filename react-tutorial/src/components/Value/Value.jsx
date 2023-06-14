import { AccordionSection } from './component/Accordion/Accordion'
import styles from './value.module.scss'
import value from '../../public/value.png'

export const Value = () => {

    return (
        <section className={`${styles.value}`}>
            <div className={`${styles.valueContainer} paddings innerWidth flexCenter`}>
              <div className={`${styles.valueContainerPicture}`}>
                  <div className={`image-container`}>
                    <img src={value} alt='value' />
                  </div>
              </div> 
              <AccordionSection />
            </div>
           
        </section>
        
    )
    
}