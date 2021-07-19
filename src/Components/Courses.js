import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Courses = () => {

    const [course, setCourse] = useState([{
        coursename: ""
    }]);  
    
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
                    <h3>{item.course_name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Courses;
