import React, { useState } from "react";
import { useHistory, NavLink } from 'react-router-dom';
import axios from "axios";
// import * as yup from "yup";
import "../css/signup.css";
import logo from "../images/futurebot.png"

const SignUpForm = (props) => {
    
    const history = useHistory();
    const { getUser } = props
    
    // Signup State:
    const [signupForm, setSignupForm] = useState([{
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
        confirmpassword: ""
    }]);

    const [uniqeUserName, setUniqueUserName] = useState()
    
    // Error State for validation:
    // const [errorState, setErrorState] = useState([{
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phonenumber: "",
    //     username: "",
    //     password: "",
    //     confirmpassword: ""
    // }]);
    
    // const formSchema = yup.object().shape({
    //     firstname: yup.string().required("First Name is Required"),
    //     lastname: yup.string().required("Last Name is Required"),
    //     email: yup.string().email().required("Email is Required"),
    //     phonenumber: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    //     username: yup.string().required("Username is a Mandatory field"),
    //     password: yup.string().required("password is required").min(8, "Password must be at least 8 character").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain uppercase and lowercase letter, a number, and may contain special characters.'),
    //     confirmpassword: yup.string().required("Your password should match")
    // })

    // const validateForm = (e) => {
    //     yup
    //         .reach(formSchema, e.target.name)
    //         .validate(e.target.value)
    //         .then((valid) => {
    //             setErrorState({ ...errorState, [e.target.name]: "" });
    //         })
    //         .catch((err) => {
    //             setErrorState({ ...errorState, [e.target.name]: err.errors[0] });
    //             console.log('ErrorState', errorState)
    //             console.log("ERRORSTATE =", err.errors);
    //         })
    // };
    
    const inputchange = (e) => {
        e.persist();
        // const newUser =
            setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
        // validateForm(e)
        // setSignupForm(newUser);
    };
    

    const submitHandler = (e) => {
        e.preventDefault();
        getUser(signupForm)
        axios
            .post("http://localhost:5000/api/users/signup/", signupForm)
            .then((res) => {
                history.push('/welcome')
            })
            .catch((err) => {
                setUniqueUserName(err.response.data.message)
                console.log("Signup error =", err.response.data.message);
            });
            setSignupForm(signupForm);
    };

    return (
        <>
            <div className = "signup_header_div">
                <img src = {logo} alt = {logo} className = "signup_image_style"/>
                <NavLink className = "signup_header" to = '/'>Home</NavLink>
            </div>
        <div className = "signup_wrapperdiv">
            <div className = "form_header_div">
                <p className = "signup_title">If you already have an account click here to <NavLink to = "login" className = "login_link">Login</NavLink></p>
            </div>
            <form className = "form_ele" onSubmit={submitHandler}>
            <span className = "error_msg">{uniqeUserName}</span>
            <div className = "formGroup_wrapper">
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="firstname">First Name
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="text"
                        name="firstname"
                        id="firstname"
                        value = {signupForm.firstname}
                        placeholder="First Name"
                        required
                        onChange={inputchange} />
                        {/* {errorState.firstname.length > 0 ? <p className = "validation_error"> {errorState.firstname }</p> : null } */}
                </div>
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="lastname">Last Name
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="text"
                        name="lastname"
                        id="lastname"
                        value={signupForm.lastname}
                        placeholder = "Last Name"
                        required
                        onChange={inputchange} />
                    {/* {errorState.lastname.length > 0 ? <p className = "validation_error"> {errorState.lastname }</p> : null } */}
                </div>
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="email">E-mail
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="email"
                        name="email"
                        id="email"
                        value={signupForm.email}
                        placeholder = "username@domain.com"        
                        required
                        onChange={inputchange} />
                        {/* {errorState.email.length > 0 ? <p className = "validation_error"> {errorState.email}</p> : null } */}    
                </div>
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="phone">Phone Number
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="tel"
                        name="phone"
                        id="phone"
                        value={signupForm.phonenumber}
                        placeholder = "123-456-7890"        
                        required
                        onChange={inputchange} />
                </div>
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="username">Username
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="text"
                        name="username"
                        id="username"
                        value={signupForm.username}
                        placeholder = "username"        
                        required
                        onChange={inputchange} />
                </div>
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="password">Password
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="password"
                        name="password"
                        id="password"
                        value={signupForm.password}
                        placeholder = "Password"    
                        required
                        onChange={inputchange} />
                </div>
                <div className = "signup_formgroup_div">
                    <label className = "label_ele" htmlFor="confirmpassword">Confirm Password
                    <span className = "signup_required">*</span></label>
                    <input className = "signup_input_ele" type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        value={signupForm.confirmpassword}
                        placeholder = "Confirm Password"
                        required
                        onChange={inputchange} />
                </div>
            </div>
            <div className = "signup_button_wrapper">
                <button className = "signup_submitbutton" type="submit">Signup</button>
            </div>
        </form>
    </div>
    </>
    )
}

export default SignUpForm