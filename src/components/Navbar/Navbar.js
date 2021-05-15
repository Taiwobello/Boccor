import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import "./Navbar.css"


function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navLogo">
                    <h1>BOCCOR<spam className="dot">.</spam></h1>
                </div>
                <ul className="navList">
                    <p id="active">Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Portfolio</p>
                    <p>Team</p>
                    <p>Contact</p>
                    <CustomButton name={"Get Started"} id="getStarted" />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
