import React from 'react'

function PortfolioItem({image}) {
    return (
        <div className="portfolioItem">
            <img src={image} />
        </div>
    )
}

export default PortfolioItem
