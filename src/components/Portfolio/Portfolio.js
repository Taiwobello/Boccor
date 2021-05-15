import React from 'react'
import PortfolioController from '../PortfolioController/PortfolioController'
import PortfolioList from '../PortfolioList/PortfolioList'
import Title from "../Title/Title"

// import myImage from "../../img/portfolio/portfolio-1.jpg"

import "./Portfolio.css"

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="container">
                <Title titleName="PORTFOLIO" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                <PortfolioController />
                <PortfolioList />
                
            </div>
        </div>
    )
}

export default Portfolio
