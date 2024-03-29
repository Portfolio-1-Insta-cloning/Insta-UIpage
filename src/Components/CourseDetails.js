import React, {useState, useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import axios from 'axios';
import "../css/courseDetails.css";
import logo from "../images/futurebot.png";

const CourseDetails = (props) => {

    const {course} = props;
    const {id} = useParams()
    console.log("Course Details props", course);

    const [description, setDescription] = useState([{
        title: "",
        description: "",
    }])

    useEffect (() => {
        axios
            .get(`http://localhost:5000/api/courses/${id}/details`)
            .then((res) => {
                console.log("GET REQUEST", res.data);
                setDescription(res.data);
            })
            .catch((err) => {
                console.log(err);
        })
    }, [])

    return (
        <div>
            <div className = "coursedetails_header_div">
                <img src = {logo} alt = {logo} className = "coursedetails_image_style"/>
                <div className = "coursedetails_navlink_div">
                    <NavLink to = "/courses" className = "coursedetails_header">Courses </NavLink>
                    <NavLink to = "/" className = "coursedetails_header">Home</NavLink>
                </div>
            </div>
            <h1 className = "coursedetails_title">{description[0].course_name}</h1>
            <div className = "cards_maindiv">
            {description.map((item) => (
                    <div key = {item.id} className = "coursedetails_card">
                        <h3 className = "card_title">{item.title}</h3>
                        <p className = "card_description">{item.description}</p>
                    </div>
            ))}
            </div>
            <div className = "enroll_button_div">
                <button type="button" className = "enroll_button">Enroll</button>
            </div>
        </div>
    )
}

export default CourseDetails;