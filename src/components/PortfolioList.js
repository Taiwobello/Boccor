import React from 'react'
import PortfolioItem from './PortfolioItem'

import {connect} from "react-redux"

function PortfolioList(props) {
    let filteredPortfolio = []

        if (props.filterType === "all"){
            filteredPortfolio = props.portfolioData.filter(portfolioObj => {
                return portfolioObj
            })
        } else if (props.filterType === "app"){
            filteredPortfolio = props.portfolioData.filter(portfolioObj => {
                if (portfolioObj.category === "app"){
                    return portfolioObj
                }
            })
        } else if (props.filterType === "card"){
            filteredPortfolio = props.portfolioData.filter(portfolioObj => {
                if (portfolioObj.category === "card"){
                    return portfolioObj
                }
            })
        } else if (props.filterType === "web"){
            filteredPortfolio = props.portfolioData.filter(portfolioObj => {
                if (portfolioObj.category === "web"){
                    return portfolioObj
                }
            })
        }
    return (
        <div className='portfolioList'>
            {filteredPortfolio.map(portfolioObj => {
                return <PortfolioItem portfolioObj={portfolioObj} image={portfolioObj.image} />
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
