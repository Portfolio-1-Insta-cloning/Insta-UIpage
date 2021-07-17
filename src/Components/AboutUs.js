import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/futurebot.png'
import '../css/aboutus.css';

const AboutUs = () => {
    return (
        <div>
            <div className = "aboutus_header_div">
                <img src = {logo} className = "aboutus_image_style"/>
                <NavLink className = "aboutus_header" to = '/'>Home</NavLink>
            </div>
            <h1 className = "aboutus_title">ABOUT US</h1>
            <div className = "aboutus_content">
                <p>
                    We don’t just teach coding and robotics. We create learning environments for
                    kids to develop logical thinking, creative exploration, and critical reasoning 
                    skills – while having fun. </p>
                    <p>Our interactive learning allows kids to learn the basics with easy block-based
                    coding challenges before seamlessly transitioning to real-world text-based
                    languages like Python. </p>
                    <p>We provide varied courses, to cater to the needs and interests of every child. Our
                    courses include Scratch, App Inventor, Python, Basic Electronics, Lego Wedo and
                    Lego Mindstorm.</p>
                    <p>We have taken atmost care in developing the curriculum to keep it relevant,
                    challenging while providing hands-on experience so they learn the practical
                    application of what they’re being taught. #12adf6 argent
                </p>
            </div>
        </div>
    )
}

export default AboutUs