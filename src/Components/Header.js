import React from "react";
import { NavLink } from "react-router-dom";
import '../css/header.css';

const Header = (props) => {
    const {isAuthenticated, handleLogout} = props
    return (
        <div className = "header_wrapper">
            <div className = "header_div">
                <h1 className = "header_h1">Welcome to my App!</h1>
                <div className = "navLink_div">
                    {isAuthenticated ? (<NavLink className = "navLink_item" to="/" onClick={handleLogout}>Logout</NavLink>) :
                    <>
                        <NavLink className = "navLink_item" to='/'>Home</NavLink>
                        <NavLink className = "navLink_item" to = '/signup'>Sign Up</NavLink>
                        <NavLink className = "navLink_item" to='/login'>Log In</NavLink>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;