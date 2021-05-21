import React from 'react'
import CustomButton from "./CustomButton"

function Card({title, price, plan, id}) {    
    return (
        <div className="card" id={id}>
            <h1 className="cardTitle">{title}</h1>
            <h1 className="cardPrice">${price}</h1>
            <h4 className="cardPlan">{plan}</h4>
            <div className="cardList">
                <p><span className="mark">&#10003;</span>  Quam adipiscing vitae proin</p>
                <p><span className="mark">&#10003;</span>  Nec feugiat nisl pretium</p>
                <p><span className="mark">&#10003;</span>  Nulla at volutpat diam uteera</p>
                <p><span className="mark">&#10003;</span>  Pharetra massa massa ultricies</p>
                <p><span className="mark">&#10003;</span>  Massa ultricies mi quis hendrerit</p>
            </div>
            <div className="card-btn">
                <CustomButton name="Get Started" id="card-btn" />
            </div>
            
        </div>
    )
}

export default Card
