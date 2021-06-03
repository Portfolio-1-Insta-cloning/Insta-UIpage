import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "../css/login.css";

const LoginForm = (props) => {

    const history = useHistory();
    const {setAuthenticatedSuccess, loginFunc, getUser} = props;

    const [credentials, setCredentials] = useState({
        username: "jake",
        password: "jake123"
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
            // getUser(res.data)
            history.push("/welcome");
        })
        .catch((err) => {
            console.log('login error:', err);
            // setLoginError(err.response.data.message)
            // console.log('Error Message =', err.response.data.message)
        })
    }

    return (
        <div className = "login_Wrapper_div">
            <div className = "form_header_div">
                <h1 className = "login_title">Login</h1>
            </div>
            <form className = "login_form_ele" onSubmit={submitHandler}>
                <span className = "error_msg">{loginError}</span>
                <div className = "login_formGroup_div">
                    <label className = "login_label_ele" htmlFor="username">Username<span className = "login_required">*</span></label>
                    <input className = "login_input_ele" type="text"
                    name="username"
                    id="username"
                    value={credentials.username}
                    required
                    onChange={changeHandler} />
                </div>
                <div className = "login_formGroup_div">
                    <label className = "login_label_ele" htmlFor="password">Password<span className = "login_required">*</span></label>
                    <input className = "login_input_ele" type="password"
                    name="password"
                    id="password"
                    value = {credentials.password}
                    onChange={changeHandler} />
                </div>
                <button className = "submitbutton" type = "submit">Login</button>
            </form>
        </div >
        
    )
}

export default LoginForm;