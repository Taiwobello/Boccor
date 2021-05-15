import React from 'react'

import "./PortfolioItem.css"

function PortfolioItem({image}) {
    return (
        <div className="portfolioItem">
            <img src={image} />
        </div>
    )
}

export default PortfolioItem
