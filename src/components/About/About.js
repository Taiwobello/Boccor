import React from 'react'

import aboutImage from "../../img/about.jpg"

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SecurityIcon from '@material-ui/icons/Security';
import AppsIcon from '@material-ui/icons/Apps';
import DescriptionIcon from '@material-ui/icons/Description';

import "./About.css"

function About() {
    return (
        <div className="about">
            <div className="container">
                <img src={aboutImage} alt="about" className="aboutImage"/>
                <div className="aboutText">
                    <h1>Voluptatem dignissimos provident quasi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehender</p>
                    <div className="aboutDescriptions">
                        <div className="aboutDescription">
                            <div className="discriptionTitle">
                                <DescriptionIcon style={{ color: "#fdc137" }} fontSize="large"  className="aboutIcon" />
                                <h3>Corporis voluptates sit</h3>
                            </div>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div className="aboutDescription">
                        <div className="discriptionTitle">
                            <AppsIcon fontSize="large" style={{ color: "#fdc137" }} className="aboutIcon" />
                            <h3>Ullamco laboris nisi</h3>
                        </div>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        <div className="aboutDescription">
                        <div className="discriptionTitle">
                            <PhotoLibraryIcon style={{ color: "#fdc137" }} fontSize="large"  className="aboutIcon" />
                            <h3>Labore consequatur</h3>
                        </div>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                        <div className="aboutDescription">
                        <div className="discriptionTitle">
                            <SecurityIcon style={{ color: "#fdc137" }} fontSize="large"  className="aboutIcon" />
                            <h3>Beatae veritatis</h3>
                        </div>
                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pact</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
