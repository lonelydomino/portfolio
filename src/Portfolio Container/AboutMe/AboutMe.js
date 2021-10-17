import React from 'react'
import { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
     return (
     <div className="about-me-container screen-container">
         <div className="about-me-parent">
             <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"}/>
         </div>
        
     </div>
     )
}
export default AboutMe