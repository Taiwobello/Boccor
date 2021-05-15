import React from 'react'

import "./CustomButton.css"

function CustomButton({name, id}) {
    return (
        <div>
            <button className="btn" id={id}>{name}</button>
        </div>
    )
}

export default CustomButton
