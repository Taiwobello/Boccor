import React from 'react'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Title from "./Title"
import CustomButton from "./CustomButton"


function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <Title titleName="CONTACT" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                <div className="contactWrapper">
                    <div className="contactDetails">
                        <div className="address shadow contactDetail">
                            <LocationOnIcon fontSize="large" style={{ color: "#fdc137" }} />
                            <h2>Our Address</h2>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className="calllEmailWrapper">
                            <div className="email shadow contactDetail">
                                <MailOutlineIcon fontSize="large" style={{ color: "#fdc137" }}/>
                                <h2>Email Us</h2>
                                <p>info@example.com</p>
                                <p>contact@example.com</p>
                            </div>
                            <div className="call shadow contactDetail">
                                <PhoneInTalkIcon fontSize="large" style={{ color: "#fdc137" }}/>
                                <h2>Call Us</h2>
                                <p>+1 5589 55488 55</p>
                                <p>+1 6678 254445 41</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm shadow">
                        <div className="nameEmailWrapper">
                            <input type="text" className="name" placeholder="Your Name" />
                            <input type="email" className="email" placeholder="Your Email" />
                        </div>
                        <input type="text" className="subject" placeholder="Subject" />
                        <textarea placeholder="Message" className="message"></textarea>
                        <CustomButton id="contact-btn" name="Send Message" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
