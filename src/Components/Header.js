import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/futurebot.png'
import '../css/header.css';

const Header = () => {

    const [dropdown, setDropDown] = useState(false)
    return (
        <div className = "header_wrapper">
            <div className = "header_div">
                <div className = "header_image_div">
                    <img src = {logo} className = "header_image_style"/>
                </div>
                {/* <h1 className = "header_h1">Future Bots</h1> */}
                <div className = "navLink_div">
                    <NavLink className = "navLink_item" to='/courses'>Courses </NavLink>
                    <NavLink className = "navLink_item" to = '/signup'>Sign Up</NavLink>
                    <NavLink className = "navLink_item" to='/login'>Log In</NavLink>
                    <NavLink className = "navLink_item" to='/aboutus'>About Us</NavLink>
                    <NavLink className = "navLink_item" to='/contactus'>Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;