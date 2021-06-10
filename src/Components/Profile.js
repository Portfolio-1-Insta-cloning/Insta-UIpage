import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import "../css/profile.css";
import axios from 'axios';

const Profile = (props) => {
    const { loginUser, handleLogout } = props

    // const params = useParams();

    // States to edit user details:
    const [editing, setEditing] = useState(false);
    const [editProfile, setEditProfile] = useState({
        id: loginUser.id,
        firstname: loginUser.firstname,
        lastname: loginUser.lastname
    });

    const editSubmitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`http://localhost:5000/api/users/${loginUser.id}`, { firstname: editProfile.firstname, lastname: editProfile.lastname })
            .then((res) => {
                console.log("Edit API res = ", res);
                setEditProfile(res);
            })
            .catch((err) => {
                console.log("Profile Error =",err.response.data.message);
            });
    };

    const editChangeHandler = (e) => {
        // e.persist();
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
        console.log("Edit Profile =", editProfile);
    }

    // useEffect(() => {
    //     getUserInfo(props)
    // });

    // const getUserInfo = (props) => {
    //     console.log("Get user info =", props);
    //     const {id} = props.match.params;
    //     axios
    //         .get(`http://localhost:5000/api/users/${id}`)
    //         .then(res => { console.log(res) })
    //         .catch(err => { console.error(err) })
    // }

    return (
        <div>
            <div className = "profile_navlink_wrapper">
                <NavLink to = "/" className = "profile_navlink_item">Home</NavLink>
                <NavLink to = "/" onClick={handleLogout} className = "profile_navlink_item">Logout</NavLink>
            </div>

            <p className = "profile_title"> User Profile</p>
            <p>First Name: { editProfile.firstname }</p>
            <p>Last Name: {editProfile.lastname}</p>
            <button type="submit" onClick = {() => setEditing(true)}>Edit</button>
            {editing && (
                <form onSubmit={editSubmitHandler}>
                    <div>
                        <label>First Name</label>
                        <input
                            name = "firstname"
                            onChange={editChangeHandler}
                        value={ editProfile.firstname }
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            name = "lastname"
                            onChange={editChangeHandler}
                        value={ editProfile.lastname }
                        />
                    </div>
                    <button type="submit">Save</button>
                    <button onClick={() => setEditing(false) }>Cancel</button>
                </form>
            )}
        </div>
    )
}

export default Profile;