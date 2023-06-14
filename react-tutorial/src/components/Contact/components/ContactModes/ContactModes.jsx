import styles from './contactModes.modules.scss/?inline';
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

export const ContactModes = () => {
    return (
        <div className={`${styles.contactModes} flexColStart`} >
          <div className={`${styles.contactModesRow} flexStart`}>
             <div className={`${styles.contactModesRowMode} flexColCenter`}>
                <div className={`flexStart`}>
                   <div className={`${styles.contactModesRowModeIcon} flexCenter`}>
                     <MdCall size={25}/>
                   </div>
                   <div className={`${styles.contactModesRowModeDetail} flexColStart`}>
                    <span className={`primaryText`}>Call</span>
                    <span className={`secondaryText`}>021 123 145 14</span>
                   </div>
                   <div className={`${styles.contactModesRowModeButton} flexCenter`}>Call Now</div>
                </div>
             </div>

             <div className={`${styles.contactModesRowMode} flexColCenter`}>
                <div className={`flexStart`}>
                   <div className={`${styles.contactModesRowModeIcon} flexCenter`}>
                     <BsFillChatDotsFill size={25}/>
                   </div>
                   <div className={`${styles.contactModesRowModeDetail} flexColStart`}>
                    <span className={`primaryText`}>Call</span>
                    <span className={`secondaryText`}>021 123 145 14</span>
                   </div>
                   <div className={`${styles.contactModesRowModeButton} flexCenter`}>Chat Now</div>
                </div>
             </div>
          </div>
{/* second row*/}
          <div className={`${styles.contactModesRow} flexStart`}>
             <div className={`${styles.contactModesRowMode} flexColCenter`}>
                <div className={`flexStart`}>
                   <div className={`${styles.contactModesRowModeIcon} flexCenter`}>
                     <HiChatBubbleBottomCenter size={25}/>
                   </div>
                   <div className={`${styles.contactModesRowModeDetail} flexColStart`}>
                    <span className={`primaryText`}>Call</span>
                    <span className={`secondaryText`}>021 123 145 14</span>
                   </div>
                   <div className={`${styles.contactModesRowModeButton} flexCenter`}>Message Now</div>
                </div>
             </div>

             <div className={`${styles.contactModesRowMode} flexColCenter`}>
                <div className={`flexStart`}>
                   <div className={`${styles.contactModesRowModeIcon} flexCenter`}>
                     <BsFillChatDotsFill size={25}/>
                   </div>
                   <div className={`${styles.contactModesRowModeDetail} flexColStart`}>
                    <span className={`primaryText`}>Call</span>
                    <span className={`secondaryText`}>021 123 145 14</span>
                   </div>
                   <div className={`${styles.contactModesRowModeButton} flexCenter`}>Chat Now</div>
                </div>
             </div>
          </div>        
        </div>
    )
}