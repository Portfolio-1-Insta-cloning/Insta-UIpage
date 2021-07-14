import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import '../css/header.css';

const Header = () => {

    const [dropdown, setDropDown] = useState(false)
    return (
        <div className = "header_wrapper">
            <div className = "header_div">
                <h1 className = "header_h1">Future Bots!</h1>
                <div className = "navLink_div">
                    <div className = "dropdown">
                        <NavLink 
                            className = "navLink_item" 
                            to='/' 
                            onMouseOver = {() => setDropDown(true)} 
                            onMouseLeave = {() => setDropDown(false)}
                            >
                            Courses
                            </NavLink>
                            { dropdown && (<div className = "hearder_dropdown_content">
                                <a href = "#"> Scratch </a>
                                <a href = "#"> App Inventor </a>
                                <a href = "#"> Python </a>
                                <a href = "#"> TINKERCAD </a>
                            </div>) }
                    </div>
                    <NavLink className = "navLink_item" to = '/signup'>Sign Up</NavLink>
                    <NavLink className = "navLink_item" to='/login'>Log In</NavLink>
                    <NavLink className = "navLink_item" to='/aboutus'>About Us</NavLink>
                    <NavLink className = "navLink_item" to='/'>Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;