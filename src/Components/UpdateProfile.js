import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/updateProfile.css'
import { axiosWithAuth } from './axiosWithAuth';

const UpdateProfile = (props) => {

    const history = useHistory();
    const { loginUser, loginFunc} = props;
    console.log("Update Profile = ", loginUser);

    const [editProfile, setEditProfile] = useState({
        id: loginUser.id,
        firstname: loginUser.firstname,
        lastname: loginUser.lastname
    });

    const editChangeHandler = (e) => {
        e.persist();
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
    }

    const editSubmitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`http://localhost:5000/api/users/${loginUser.id}`, {
                editProfile
            })
            .then((res) => {
                console.log("Edit API res = ", res.data);
                setEditProfile(res.data);
                loginFunc(res.data);
            })
            .catch((err) => {
                console.log("Profile Error =",err.response.data.message);
            });
    };
    
    return (
        <div>
            <p className = "edit_profile_title"> Update Profile</p>
            <form className = "edit_profile_form" onSubmit={editSubmitHandler}>
                <div className = "edit_profile_formgroup_div">
                    <label className = "edit_profile_label_ele">First Name</label>
                    <input
                        className = "edit_profile_input_ele"
                        name = "firstname"
                        onChange={editChangeHandler}
                    value={ editProfile.firstname }
                    />
                </div>
                <div>
                    <label className = "edit_profile_label_ele">Last Name</label>
                    <input
                        className = "edit_profile_input_ele"
                        name = "lastname"
                        onChange={editChangeHandler}
                    value={ editProfile.lastname }
                    />
                </div>
                <div className = "editprofile_button_wrapper">
                    <button  className = "editprofile_submitbutton" onClick = {() => history.push("/myaccount")}>Save</button>
                    <button className = "editprofile_submitbutton" onClick = {() => history.push("/myaccount")} >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile;