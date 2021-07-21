import React, {useState, useEffect} from 'react';
import {useHistory, NavLink} from 'react-router-dom';
import axios from 'axios';
import "../css/courses.css";
import logo from "../images/futurebot.png";

const Courses = (props) => {

    const {course, setCourse} = props;
    const history = useHistory();
    
    
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/courses`)
            .then((res) => {
                console.log("Course List", res.data);
                setCourse(res.data);
            })
            .catch((err) => {
                console.log(err)
        })
    }, [])

    return (
        <div>
            <div className = "course_header_div">
                <img src = {logo} alt = {logo} className = "course_image_style"/>
                <NavLink className = "course_header" to = "/">Home</NavLink>
            </div>
            <h1 className = "course_title">Courses</h1>
            {course.map((item) => (
                <div className = "course_content_div" key = {item.id}>
                    <button className = "course_content" 
                            onClick = {() => history.push(`${item.id}/details`)}
                    >{item.course_name}</button>
                </div>
            ))}
        </div>
    )
}

export default Courses;
