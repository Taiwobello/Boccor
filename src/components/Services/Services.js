import React from 'react'

import serviceOne from "../../img/services-1.jpg"
import serviceTwo from "../../img/services-2.jpg"
import serviceThree from "../../img/services-3.jpg"
import serviceFour from "../../img/services-4.jpg"
import CustomUnderline from '../CustomUnderline/CustomUnderline'
import Title from '../Title/Title'

import "./Services.css"

function Services() {
    return (
        <div className="services">
            <div className="container">
                <Title titleName="SERVICES" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />

                <div className="servicesDiscriptions">
                    <div className="service">
                        <div className="zoomin frame">
                            <img src={serviceOne} alt="services" />
                        </div>
                        <div className="serviceText">
                            <h2>Temporibus laudantium</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <p className="readMore">	&#8594; READ MORE</p>
                        </div>
                    </div>
                    <div className="service">
                    <div className="zoomin frame">
                            <img src={serviceTwo} alt="services" />
                        </div>
                        <div className="serviceText">
                            <h2>Veritatis natus nisi</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <p className="readMore">	&#8594; READ MORE</p>
                        </div>
                    </div>
                    <div className="service">
                    <div className="zoomin frame">
                            <img src={serviceThree} alt="services" />
                        </div>
                        <div className="serviceText">
                            <h2>Aperiores voluptates</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <p className="readMore">	&#8594; READ MORE</p>
                        </div>
                    </div>
                    <div className="service">
                    <div className="zoomin frame">
                            <img src={serviceFour} alt="services" />
                        </div>
                        <div className="serviceText">
                            <h2>Aliquam veritatis</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <p className="readMore">	&#8594; READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
