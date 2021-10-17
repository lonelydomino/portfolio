import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import { useState } from 'react'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">
                    <span>{props.heading ? props.heading : "" }</span>
                    {props.fromDate && props.toDate ? (<div className="heading-date">
                        {props.fromDate + " - " + props.toDate}</div>) : (<div></div>)}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>

                </div>
            </div>
        </div>
    }

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"}
    ]

    const programmingSkillDetails = [
        {skill: "Javascript", ratingPercentage: 85},
        {skill: "React JS", ratingPercentage: 85},
        {skill: "CSS", ratingPercentage: 75},
        {skill: "HTML", ratingPercentage: 95},
        {skill: "Ruby", ratingPercentage: 95}
    ]
    const projectDetails = [
        {   
            title: "Personal Portfolio Website",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "A portfolio website to showcase my resume, skills and projects.",
            subHeading: "Technologies used: React JS, Bootstrap"
        },
        {   
            title: "WebMart",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "Mock ecommerce website for showcasing and sell products online.",
            subHeading: "Technologies used: React JS, Redux, NodeJS"
        },
        {   
            title: "MamaBear",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "Ecommerce website designed around Shopify for a nonprofit organization.",
            subHeading: "Technologies used: React JS, Shopify, GraphQL"
        },
    ]

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

     return (
     <div className="resume-container screen-container" id={props.id || ""}>
         <div className="resume-content">
             <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
         </div>
        
     </div>
     )
}
export default Resume