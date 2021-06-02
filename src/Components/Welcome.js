import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../util/axiosWithAuth';

// import Profile from './Profile';

const WelcomeWrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
`;

// const TitleHead = styled.h1`
//     font-size: 4rem;
//     color: #1aa3ff;
// `;

const Welcome = (props) => {
  const {id} = useParams()
  console.log("Welcome", props)

  const [firstName, setFirstName] = useState([{
    firstname: "",
    lastname: ""
  }]);
  
    // useEffect(() => {
    //   axiosWithAuth()
    //     .get("http://localhost:5000/api/users/64", firstName)
    //     .then((res) => {
    //             console.log("welcome res=", res)
    //             setFirstName(res.data.firstname)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    //   });

    
    // const { currentUser, loginUser, isAuthenticated } = props
    return (
        <WelcomeWrapperDiv>
            {/* <h3> Hello {firstName} ! </h3> */}
            {/* <Profile/> */}
            {/* {isAuthenticated ?
                <TitleHead>Welcome, {currentUser.firstname} !</TitleHead> :
                <TitleHead>Welcome back, {loginUser.firstname} !</TitleHead>} */}
           
        </WelcomeWrapperDiv>
    )
}

export default Welcome