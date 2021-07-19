import React, { useState } from "react";
import { Route, Switch, useParams} from 'react-router-dom';

// Components
import './App.css';
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import Profile from './Components/Profile';
import Welcome from "./Components/Welcome";
import Courses from "./Components/Courses";
import CourseDetails from "./Components/CourseDetails";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import { PrivateRoute } from "./Components/PrivateRoute";

const App = () => {
// Current user state for signup:
  const [currentUser, setCurrentUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    username: "",
    password: "",
    confirmpassword: ""
  });

  // To get current user:
  const getUser = (user) => {
    const loggedInUser = {
      ...currentUser,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password
    }
    setCurrentUser(loggedInUser);
  }

  // Authentication:
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const setAuthenticatedSuccess = () => {
    console.log("login is successful.. setting true")
    setIsAuthenticated(true)
  }

  // Logout function:
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  }

  // Login State:
  const [loginUser, setLoginUser] = useState([{
    username: "",
    password: ""
  }]);

  
  const loginFunc = (user) => {
    const exsistingUser = {
      ...loginUser,
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password
    }
    setLoginUser(exsistingUser);
  }
  // console.log("LOGIN USER =", loginUser);
  
  return (
    <div className = "wrapperDiv">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/signup'>
          <SignUpForm getUser={getUser} />
        </Route>
        <Route path='/login'>
          <LoginForm
            loginFunc = {loginFunc}
            setAuthenticatedSuccess={setAuthenticatedSuccess}
          />
        </Route>
        <Route path = '/aboutus'>
          <AboutUs/>
        </Route>  
        <Route path = '/contactus'> 
          <ContactUs/>
        </Route>  
        <Route path = "/courses"> <Courses/> </Route>  
        <Route path = "/details"> <CourseDetails/> </Route>
        <PrivateRoute path='/welcome'>
          <Welcome
            loginUser={loginUser}
            handleLogout={handleLogout}/>
        </PrivateRoute>
        <PrivateRoute path = "/myaccount/:id">
          <Profile
            loginUser={loginUser}
            handleLogout={ handleLogout }/>
        </PrivateRoute>
        {/* <PrivateRoute path = "/update">
          <UpdateProfile
            loginUser = {loginUser}
            loginFunc = {loginFunc}
          />
        </PrivateRoute> */}
      </Switch>
    </div>
  );
}

export default App;
