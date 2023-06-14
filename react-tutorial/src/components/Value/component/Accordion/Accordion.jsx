import styles from './accordion.module.scss'
import data from '../../../../utils/accordion'
import { Accordion, 
         AccordionItem, 
         AccordionItemHeading, 
         AccordionItemButton, 
         AccordionItemPanel, 
         AccordionItemState 
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useState } from 'react';
//import { MdOutlineArrowDropDown } from 'react-icon/md'


export const AccordionSection = () => {
    return (
    <div className={`${styles.accordionSection} flexColStart`}>
      <span className={`orangeText`}>Our Value</span>
      <span className={`primaryText`}>Value We Give to You</span>
      <span className={`secondaryText`}>We always ready to help by providijng the best services for you. <br/>
            We beleive a good blace to live can make your life better</span>


      <Accordion 
      className={styles.accordionSectionSide}
      allowMultipleExpanded={false}
      preExpanded={[0]}
      >
      {
        data.map((item, i) => {

         const [className, setClassName] = useState(null)
          return (
            <AccordionItem className={`${styles.accordionSectionSideItem} expanded`} key={i} uuid={i}>
              <AccordionItemHeading>
                <AccordionItemButton className={`${styles.accordionSectionSideItemButton} flexCenter`}>
                  
                  {/* Howto set up classes dynamicly scss */}
                  <AccordionItemState>
                    {({expanded}) => 
                    expanded 
                    ? setClassName('expanded') 
                    : setClassName('collapsed')
                    }
                  </AccordionItemState>
                  
                  
                  <div className={`${styles.accordionSectionSideItemIcon} flexCenter`}>{item.icon}</div>
                  <span className={`primaryText`}>{item.heading}</span>
                  <div className={`${styles.accordionSectionSideItemIcon} flexCenter`}>
                    <MdOutlineArrowDropDown size={20}/>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={`secondaryText`}>{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          )
        })
      }
      </Accordion>
    </div>
    )
}