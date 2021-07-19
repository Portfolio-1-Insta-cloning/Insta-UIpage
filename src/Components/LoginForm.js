import React, { useState } from "react";
import { useHistory, NavLink } from 'react-router-dom';
import axios from "axios";
import "../css/login.css";
import logo from "../images/futurebot.png"

const LoginForm = (props) => {

    const history = useHistory();
    const {setAuthenticatedSuccess, loginFunc} = props;

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    // Login error state:
    const [loginError, setLoginError] = useState();

    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/users/login/", credentials)
            .then((res) => {
                console.log('Login Function success', res.data)
                localStorage.setItem("token", res.data.token);
                setAuthenticatedSuccess()
                loginFunc(res.data)
                history.push("/welcome");
            })
            .catch((err) => {
                console.log('login error:', err);
                setLoginError(err.response.data.message)
                console.log('Error Message =', err.response.data.message)
            })
    }

    return (
        <>
        <div className = "login_header_div">
            <img src = {logo} alt = {logo} className = "login_image_style"/>
            <NavLink className = "login_header" to = '/'>Home</NavLink>
        </div>
        <div className="login_Wrapper_div">
            
            <form className = "login_form_ele" onSubmit={submitHandler}>
                <span className = "error_msg">{loginError}</span>
                <div className = "login_formGroup_div">
                    <label className = "login_label_ele">Username<span className = "login_required">*</span></label>
                        <input className = "login_input_ele" type="text"
                            name="username"
                            id="username"
                            value={credentials.username}
                            required
                            onChange={changeHandler} />
                </div>
                <div className = "login_formGroup_div">
                    <label className = "login_label_ele" htmlFor="password">Password<span className = "login_required">*</span></label>
                        <input className="login_input_ele"
                            type="password"
                            name="password"
                            id="password"
                            value = {credentials.password}
                            onChange={changeHandler} />
                    </div>
                    <div className = "login_button_wrapper">
                    <button className = "login_submitbutton" type = "submit">Login</button>
                    </div>
            <div className = "form_header_div">
                <p className = "login_title">Don't you have an account? <NavLink to = "signup" className = "signup_link">Register here</NavLink></p>
            </div>
            </form>
        </div >
    </>
    )
}

export default LoginForm;