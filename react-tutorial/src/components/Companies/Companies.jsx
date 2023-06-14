import styles from './companies.module.scss'
import prologis from '../../public/prologis.png'
import tower from '../../public/tower.png'
import equinix from '../../public/equinix.png'
import realty from '../../public/realty.png'

export const Companies = () => {
    return (
       <section className={`${styles.Companies}`}>
          <div className={`${styles.CompaniesContainer} paddings innerWidth flexCenter`}>
            <img src={prologis} alt='prologis' />
            <img src={tower} alt='tower' />
            <img src={equinix} alt='equinix' />
            <img src={realty} alt='realty' />
          </div>
       </section>
    )
}
