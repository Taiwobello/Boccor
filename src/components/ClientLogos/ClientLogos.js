import React from 'react'

import myob from "../../img/clients/client-1.png"
import belimo from "../../img/clients/client-2.png"
import lifeGroups from "../../img/clients/client-3.png"
import lily from "../../img/clients/client-4.png"
import citrus from "../../img/clients/client-5.png"
import trustly from "../../img/clients/client-6.png"
import "./ClientLogos.css"



function ClientLogos() {
    return (
        <div className="clientLogos">
            <div className="container"> 
                <div className="block one">
                    <img src={myob} className="clientLogo myob" />
                    <img src={belimo} className="clientLogo myob" />
                </div>
                <div className="block 1wo">
                    <img src={lifeGroups} className="clientLogo myob" />
                    <img src={lily} className="clientLogo myob" />
                </div>
                <div className="block three">
                    <img src={citrus} className="clientLogo myob" />
                    <img src={trustly} className="clientLogo myob" />
                </div>                
                
            </div>
        </div>
    )
}

export default ClientLogos
