import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./SocialIcons.css"

function SocialIcons({id}) {
    return (
        <div className="socialIcons" id={id}>
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
        </div>
    )
}

export default SocialIcons
