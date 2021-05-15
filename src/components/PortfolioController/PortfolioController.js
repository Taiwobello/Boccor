import React, {useState} from 'react'
import {connect} from "react-redux"
import { toggleFilterType } from '../../redux/portfolio/portfolioAction'

import "./PortfolioController.css"

function PortfolioController(props) {
    const [activeTag, setActiveTag] = useState("all")
    const toggleActiveTag = (id) => {
        setActiveTag(id)
    }
    return (
        <div className="portfolioController">
            <p id="all" className={`${activeTag === "all" ? "active" : null}`} onClick={(e) => {
                console.log(e.target.id)
                props.toggleFilterType(e.target.id)
                toggleActiveTag(e.target.id)}}>All</p>
            <p id="app" className={`${activeTag === "app" ? "active" : null}`} onClick={(e) => {
                props.toggleFilterType(e.target.id)
                toggleActiveTag(e.target.id)}} >App</p>
            <p id="card" className={`${activeTag === "card" ? "active" : null}`} onClick={(e) => {
                props.toggleFilterType(e.target.id)
                toggleActiveTag(e.target.id)}} >Card</p>
            <p id="web" className={`${activeTag === "web" ? "active" : null}`} onClick={(e) => {
                props.toggleFilterType(e.target.id)
                toggleActiveTag(e.target.id)}} >Web</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFilterType: (e) => dispatch(toggleFilterType(e))
    }
}

export default connect(null, mapDispatchToProps)(PortfolioController)
