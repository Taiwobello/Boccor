import React from 'react'

function PortfolioItem({image}) {
    return (
        <div className="portfolioItem">
            <img src={image} alt="Portfolio" />
        </div>
    )
}

export default PortfolioItem
