import heroImage from '../../public/heroImage.png'
import "../../styles/_variables.scss";
import styles from './hero.module.scss'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
    return (

        <section className={`${styles.hero} `}>
            <div className={`${styles.heroContainer} paddings innerWidth flexCenter`}>
               <div className={`${styles.heroContent} flexColStart`}>
                   <div className={styles.heroContentTitle}>
                    <div className={styles.heroContentTitleCircle} />
                      <h1>Discover<br /> Most Suitable <br/> Property</h1>
                   </div>

                   <div className={`${styles.heroContentDes} flexColStart`}>
                      <span className={`secondaryText`}>Find a variety of properties that suit you very easilty</span>
                      <span className={`secondaryText`}>Forget all difficulties in finding a residence for you</span>
                   </div>

                   <div className={`${styles.heroContentSearch} flexCenter`}>
                      <HiLocationMarker color='#4066ff' size={25}/>
                      <input type="text" />
                      <button className={`button`}>Seacrh</button>
                   </div>

                   <div className={`${styles.heroContentStats} flexStart`}>
                     <div className={`${styles.heroContentStatsStat} flexColCenter`}>
                          <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                          </span>
                          <span className={`secondaryText`}>Premium Products</span>
                     </div>
                     <div className={`${styles.heroContentStatsStat} flexColCenter`}>
                          <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                          </span> 
                          <span className={`secondaryText`}>Happy costumers</span>
                     </div>
                      <div className={`${styles.heroContentStatsStat} flexColCenter`}>
                          <span>
                            <CountUp end={28} />
                            <span>+</span>
                          </span> 
                          <span className={`secondaryText`}>Award Winning</span>
                     </div>

                   </div>
               </div>
               <div className={`${styles.heroPicture} flexCenter`}>
                  <div className={`${styles.heroPictureImg} `}>
                    <img src={heroImage} alt="" />
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Hero

