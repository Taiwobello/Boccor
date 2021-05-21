import React from 'react'


function CustomButton({name, id, btnBox}) {
    return (
        <div className={btnBox}>
            <button className="btn" id={id}>{name}</button>
        </div>
    )
}

export default CustomButton
