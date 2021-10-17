import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import { useState } from 'react'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    const ResumeHeading = (props) => {
        return(
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
        )
        
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
    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
            heading={"University of Redlands, Redlands, CA"}
            subHeading={"Bachelor of Arts, Biology"}
            fromDate={"2012"}
            toDate={"2014"}
            />
            <ResumeHeading
            heading={"Flatiron School, Brooklyn, NY"}
            subHeading={"Full Stack Web Development, Ruby on Rails and JavaScript"}
            fromDate={"2020"}
            toDate={"2021"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
            heading={"Lowe's"}
            subHeading={"Pro Sales Specialist"}
            fromDate={"2020"}
            toDate={"Present"}
            />
            <div className="experienceDescription">
                <span className="resume-description-text">
                    Currently working as a Pro Sales Specialist
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                ● Assisted customers with Lowe’s account and credit card sign-ups.
                </span>
                <br/>
                <span className="resume-description-text">
                ● Increased department sales profits by 13% in my first three months
                </span>
                <br/>
                <span className="resume-description-text">
                ● Worked with 3rd party vendors to place and plan product orders and deliveries.
                </span>
            </div>,
            <div className="resume-screen-container programming-skills-container" key="programming-skills">
                {programmingSkillDetails.map((skill, index)=>(
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{width: skill.ratingPercentage + "%"}} className="active-percentage">

                        </div>
                    </div>
                </div>
                ))}
            </div>,

            <div className="resume-screen-container" key="projects">
                {projectDetails.map((projectDetails, index) =>(
                    <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    />
                ) )}
            </div>,
            <div className="resume-screen-container" key="interests">
                <ResumeHeading 
                heading="Gaming"
                description="I love gaming"
                />
                <ResumeHeading 
                heading="Programming"
                description="I love Programming"
                />
                <ResumeHeading 
                heading="Music"
                description="I love Music"
                />
            </div>         
        </div>
    ]

    const handleCarousal = (index) => {
        let offsetHeight = 360
        let newCarousalOffset = {
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
        }
        setCarousalOffSetStyle(newCarousalOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onclick={() => handleCarousal(index)}
            className={index === setSelectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}>
                <img className="bullet-logo"
                src={require (`../../assets/Resume/${bullet.logoSrc}`).default}
                alt="oops, no logo"
            />


            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div style={carousalOffSetStyle.style}
            className="resume-details-carousal">
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

     return (
     <div className="resume-container screen-container" id={props.id || ""}>
         <div className="resume-content">
             <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
             <div className="resume-card">
                 <div className="resume-bullets">
                     <div className="bullet-container">
                         <div className="bullet-icons"></div>
                         <div className="bullets">{getBullets()}</div>
                     </div>
                 </div>
                 <div className="resume-bullets-details">{getResumeScreen()}</div>
             </div>
         </div>
        
     </div>
     )
}
export default Resume