import React from 'react'

import myob from "../img/clients/client-1.png"
import belimo from "../img/clients/client-2.png"
import lifeGroups from "../img/clients/client-3.png"
import lily from "../img/clients/client-4.png"
import citrus from "../img/clients/client-5.png"
import trustly from "../img/clients/client-6.png"



function ClientLogos() {
    return (
        <div className="clientLogos">
            <div className="container"> 
                <div className="logo__image-box">
                    <img src={myob} className="clientLogo myob" alt="Logo" />
                </div>
                <div className="logo__image-box">
                    <img src={belimo} className="clientLogo myob" alt="Logo"/>
                </div>
                <div className="logo__image-box">
                    <img src={lifeGroups} className="clientLogo myob" alt="Logo"/>
                </div>
                <div className="logo__image-box">
                    <img src={lily} className="clientLogo myob" alt="Logo"/>
                </div>
                <div className="logo__image-box">
                    <img src={citrus} className="clientLogo myob" alt="Logo"/>
                </div>
                <div className="logo__image-box">
                    <img src={trustly} className="clientLogo myob" alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default ClientLogos
