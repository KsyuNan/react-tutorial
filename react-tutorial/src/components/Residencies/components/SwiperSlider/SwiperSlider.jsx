import styles from './swiperSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import data from '../../../../utils/slider.json'
import { sliderSettings } from '../../../../utils/common'
import { SliderButtons } from '../SliderButtons/SliderButtons'

export const SwiperSlider = () => {
    <Swiper {...sliderSettings}>
                <SliderButtons />
                   {
                    data.map((card, i)=>(
    <SwiperSlide key={i}>
        <div className={`${styles.residenciesContainerCard} flexColStart`}>
            <img src={card.image} alt='home'/>
                <span className={`secondaryText`}>
                    <span>$</span>
                        <span>{card.price}</span>
                    </span>
                <span className={`primaryText`}>{card.name}</span>
                <span className={`secondaryText`}>{card.detail}</span>
        </div>
    </SwiperSlide>
    ))
    }
    </Swiper>
}