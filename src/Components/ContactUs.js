import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../images/futurebot.png';
import '../css/contactus.css';

const ContactUs = () => {
    return (
        <div>
            <div className = "contactus_header_div">
                <img src = {logo} className = "contactus_image_style"/>
                <NavLink className = "contactus_header" to = "/" > Home </NavLink>
            </div>
            <h1 className = "contactus_title">CONTACT US</h1>
            <div className  = "contactus_content">
                <p>Preetha Kumaraguru</p>
                <p>+91 78293 32666</p>
                <p>preethavijayavel@gmail.com</p>
                <p>https://www.instagram.com/thefutureisbots</p>
            </div>
        </div>
    )
}

export default ContactUs;