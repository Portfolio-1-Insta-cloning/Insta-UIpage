import React from 'react';
import "../css/home.css";
import Header from './Header';
import Footer from './Footer';
import Course_details from "../images/Course_details.jpg"

const Home = () => {
    return (
        <div>
            <Header/>
            <div >
               <img src = {Course_details} className="hero"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;