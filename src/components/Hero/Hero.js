import React from 'react'
import CustomButton from "../CustomButton/CustomButton"
import HeroImage from "../../img/hero-img.png"

import "./Hero.css"

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="heroText">
                    <h1>Your new digital experience with Bocor</h1>
                    <h4>We are team of talented designers making websites with Bootstrap</h4>
                    <CustomButton name="Get Started" id="hero-btn" />
                </div>
                <img src={HeroImage} className="heroImage" />
            </div>            
        </div>
    )
}

export default Hero
