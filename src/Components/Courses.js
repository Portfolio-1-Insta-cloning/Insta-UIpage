import React, { useEffect} from 'react';
import {useHistory, NavLink} from 'react-router-dom';
// import axios from 'axios';
import "../css/courses.css";
import logo from "../images/futurebot.png";
import images from "../images/images" ;

const Courses = (props) => {

    // const {course, setCourse} = props;
    const history = useHistory();
    
    
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:5000/api/courses`)
    //         .then((res) => {
    //             console.log("Course List", res.data);
    //             setCourse(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //     })
    // }, []);


    return (
        <div>
            <div className = "course_header_div">
                <img src = {logo} alt = {logo} className = "course_image_style"/>
                <NavLink className = "course_header" to = "/">Home</NavLink>
            </div>
            <h1 className = "course_title">
                <span>C</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>s</span>
                <span>e</span>
                <span>s</span>
            </h1>
            
            <div className = "course_image_div">
                {images.map((cou) => (
                    <div key = {cou.id}>
                        <img className = "course_image" src = {cou.name} onClick = {() => history.push(`${cou.id}/details`)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses;
