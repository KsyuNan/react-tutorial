import { useSwiper } from 'swiper/react'
import styles from './sliderButtons.module.scss'
export const SliderButtons = () => {
    const swiper = useSwiper()
    return (
        <div className={`${styles.button} flexCenter`}>
           <button onClick={() =>swiper.slidePrev()}>&lt;</button>
           <button onClick={() =>swiper.slideNext()}>&gt;</button>
        </div>
    )
}