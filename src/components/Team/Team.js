import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Title from "../Title/Title"

import "./Team.css"
import SocialIcons from '../../SocialIcons/SocialIcons';

function Team() {
    return (
        <div className="team">
            <div className="container">
                <Title titleName="TEAM" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                <div className="teamMembers">
                    <div className="teamMember">
                        <img src="/img/team/team-1.jpg" />
                        <h2>Walter White</h2>
                        <i>Chief Executive Officer</i>
                        <SocialIcons />
                    </div>
                    <div className="teamMember">
                        <img src="/img/team/team-2.jpg" />
                        <h2>Sarah Jhinson</h2>
                        <i>Product Manager</i>
                        <SocialIcons />
                    </div>
                    <div className="teamMember">
                        <img src="/img/team/team-3.jpg" />
                        <h2>William Anderson</h2>
                        <i>CTO</i>
                        <SocialIcons />
                    </div>
                    <div className="teamMember">
                        <img src="/img/team/team-4.jpg" />
                        <h2>Amanda Jepson</h2>
                        <i>Accountant</i>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
