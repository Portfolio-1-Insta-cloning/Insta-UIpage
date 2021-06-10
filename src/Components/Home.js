import React from 'react';
import "../css/home.css";
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="hero">
                <h1>WELCOME TO OUR HOME PAGE</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Home;