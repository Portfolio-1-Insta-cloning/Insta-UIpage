import React, {useState, useEffect} from 'react';
import {useHistory, Route} from 'react-router-dom';
import axios from 'axios';
import CourseDetails from "../Components/CourseDetails";

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
            <p>Courses</p>
            {course.map((item) => (
                <div key = {item.id}>
                    <h3 onClick = {() => history.push(`${item.id}/details`)}>{item.course_name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Courses;
