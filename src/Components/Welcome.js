import React, { useState} from 'react';
import "../css/welcome.css";
import {NavLink} from 'react-router-dom';


const Welcome = (props) => {
  const { handleLogout } = props;
  const [firstName] = useState(props.loginUser.firstname);
  
  return (
      <>
        <div>
        <NavLink className="logout_link" to="/" onClick={handleLogout}>Logout</NavLink>
        <NavLink to = "myaccount">My Account</NavLink>
        </div>
        <div className="welcome_wrapper_div">
          <h3 className = "welcome_msg">Hello, {firstName}!</h3>
        </div>
      </>
    )
}

export default Welcome