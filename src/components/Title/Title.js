import React from 'react'
import CustomUnderline from '../CustomUnderline/CustomUnderline'

import "./Title.css"
function Title({titleName, descriptionName}) {
    return (
        <div>
            <h1 className={`title ${titleName}`}>{titleName}</h1>
            <CustomUnderline />
            <p className={`description ${descriptionName}`}>{descriptionName}</p>
        </div>
    )
}

export default Title
