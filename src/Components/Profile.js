import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import "../css/profile.css";

const Profile = (props) => {
    const { loginUser, handleLogout } = props

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
                console.log("Edit API res = ", res.data);
                setEditProfile(res.data);
            })
            .catch((err) => {
                console.log("Profile Error =",err.response.data.message);
            });
    };

    const editChangeHandler = (e) => {
        e.persist();
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className = "profile_navlink_wrapper">
                <NavLink to = "/" className = "profile_navlink_item">Home</NavLink>
                <NavLink to = "/" onClick={handleLogout} className = "profile_navlink_item">Logout</NavLink>
            </div>
                <p className = "profile_title"> User Profile</p>
            <div className = "profile_div">
                <span className = "profile_field"><p className = "profile_feild_label">First Name:</p> <p className = "profile_feild_input">{ editProfile.firstname }</p></span>
                <span className = "profile_field"><p className = "profile_feild_label">Last Name: </p> <p className = "profile_feild_input">{editProfile.lastname} </p></span>
                <div className = "profile_button_wrapper">
                    <button type="submit" className = "profile_submitbutton" onClick = {() => setEditing(true)}>Edit</button>
                </div>
            </div>
            {editing && (
            <form className = "profile_form" onSubmit={editSubmitHandler}>
                <div className = "profile_formgroup_div">
                    <label className = "profile_label_ele">First Name</label>
                    <input
                        className = "profile_input_ele"
                        name = "firstname"
                        onChange={editChangeHandler}
                    value={ editProfile.firstname }
                    />
                </div>
                <div>
                    <label className = "profile_label_ele">Last Name</label>
                    <input
                        className = "profile_input_ele"
                        name = "lastname"
                        onChange={editChangeHandler}
                    value={ editProfile.lastname }
                    />
                </div>
                <div className = "profile_button_wrapper">
                    <button  className = "profile_submitbutton">Save</button>
                    <button className = "profile_submitbutton" onClick = {() => setEditing(false)}>Cancel</button>
                </div>
            </form>
            )}
        </div>
    )
}

export default Profile;