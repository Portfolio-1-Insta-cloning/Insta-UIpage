import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Button, Nav, NavDropdown, Dropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
                    {/* <div className = "dropdown">
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
                    </div> */}
                    <Nav>
                        <NavDropdown eventKey={1} title="Courses" id="basic-nav-dropdown">
                            <LinkContainer to="/scratch">
                                <Dropdown.Item eventKey={1.1}>Scratch</Dropdown.Item>    
                            </LinkContainer>      
                            <LinkContainer to="/App Inventor">
                                <Dropdown.Item eventKey={1.2}>App Inventor</Dropdown.Item>    
                            </LinkContainer>      
                            <LinkContainer to="/Python">
                                <Dropdown.Item eventKey={1.3}>Python</Dropdown.Item>    
                            </LinkContainer>      
                            <LinkContainer to="/TINKERCAD">
                                <Dropdown.Item eventKey={1.4}>TINKERCAD</Dropdown.Item>    
                            </LinkContainer>      
                        </NavDropdown>  
                    </Nav>
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