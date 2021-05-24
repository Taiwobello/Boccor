import React from 'react'

import Title from "./Title"

import SocialIcons from '../SocialIcons/SocialIcons';

function Team() {
    return (
        <div className="team" id="team">
            <div className="container">
                <Title titleName="TEAM" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                <div className="teamMembers">
                    <div className="teamMember">
                        <img src="/img/team/team-1.jpg" alt="Team" />
                        <h2>Walter White</h2>
                        <i>Chief Executive Officer</i>
                        <SocialIcons />
                    </div>
                    <div className="teamMember">
                        <img src="/img/team/team-2.jpg" alt="Team" />
                        <h2>Sarah Jhinson</h2>
                        <i>Product Manager</i>
                        <SocialIcons />
                    </div>
                    <div className="teamMember">
                        <img src="/img/team/team-3.jpg" alt="Team" />
                        <h2>William Anderson</h2>
                        <i>CTO</i>
                        <SocialIcons />
                    </div>
                    <div className="teamMember">
                        <img src="/img/team/team-4.jpg" alt="Team" />
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
