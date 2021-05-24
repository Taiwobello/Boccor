import React from 'react'
import PortfolioItem from './PortfolioItem'

import {connect} from "react-redux"

function PortfolioList({filterType, portfolioData} ) {
    let filteredPortfolio = portfolioData

    filteredPortfolio = filteredPortfolio.filter((portfolioObj) => {
        if (filterType === "all"){
            return portfolioObj
        }
        return filterType === portfolioObj.category
    })
    return (
        <div className='portfolioList'>
            {filteredPortfolio.map((portfolioObj, index) => {
                return <PortfolioItem portfolioObj={portfolioObj} image={portfolioObj.image} key={index} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        portfolioData: state.portfolioData,
        filterType: state.filterType
    }
}

export default connect(mapStateToProps)(PortfolioList)
