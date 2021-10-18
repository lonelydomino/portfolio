import './ContactMe.css'
import React,{useState} from 'react'
import imgBack from '../../../src/images/mailz.jpeg'
import loadingBar from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import Typical from 'react-typical'


const ContactMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [boolean, setBool] = useState(false)


     return (
     <div className="main-container" id={props.id || ''}>
         <ScreenHeading
         subHeading={"Let's get In Touch"}
         title={"Contact Me"}
         />
         <div className="central-form">
             <div className="col">
                <h2 className="title">
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Get In Touch 📧", 1000
                        ]}/>
                </h2>
                <a href='https://github.com/lonelydomino'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/michael-martinez-bb49a8a0/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://www.twitch.tv/drmilomd'>
                                <i className='fa fa-twitch'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                </a>
             </div>
             <div className="back-form">
                 <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt='image not found' />
                 </div>
                 <form>
                     <p>{banner}</p>
                     <label htmlFor="name">Name</label>
                     <input type="text"/>
                     <label htmlFor="name">Name</label>
                     <input type="text"/>
                     <label htmlFor="name">Name</label>
                     <input type="text"/>
                 </form>
             </div>
         </div>
        
     </div>
     )
}
export default ContactMe
