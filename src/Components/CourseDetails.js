import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CourseDetails = () => {

    const [description, setDescription] = useState([{
        title: "",
        description: "",
    }])

    useEffect (() => {
        axios
            .get(`http://localhost:5000/api/courses/3/details`)
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
            <p>Course Details</p>
            {description.map((item) => (
                <div key = {item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default CourseDetails;