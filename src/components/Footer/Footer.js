import React from 'react'
import CustomButton from "../CustomButton/CustomButton"

import SocialIcons from '../../SocialIcons/SocialIcons';

import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <h1>Bocor</h1>
                <i>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</i>
                <div className="inputButtonWrapper">
                    <input type="text" placeholder="Enter your Emai;" />
                    <CustomButton name="Subscribe" id="footer-btn" />
                </div>
                <SocialIcons id="footerIcons" />
            </div>
            
        </div>
    )
}

export default Footer
