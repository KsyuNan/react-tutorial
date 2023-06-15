import styles from './getStarted.module.scss'

export const GetStarted = () => {
    return (
   <section className={`${styles.getStarted}`}>
    <div className={`${styles.getStartedContainer} paddings innerWidth`}>
        <div className={`${styles.getStartedContainerInner} flexColCenter`}>
           <span className={`primaryText`}>Get started with Homyz</span>
           <span className={`secondaryText flexCenter`}>Subscribe and find super attractive price quotes from us.
                 <br/>Find your residence soon</span>
           <button className={`button`}>
            <a href="">Get Started</a>
           </button>
        </div>
    </div>

   </section>
    )
}