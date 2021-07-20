import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

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