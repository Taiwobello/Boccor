import React from 'react'
import Card from './Card.'
import Title from "./Title"


function Pricing() {
    return (
        <div className="pricing">
            <div className="container">
                <Title titleName="PRCICING" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                <div className="cardWrapper">
                    <Card title="Free" price="0" plan="per month" />
                    <Card title="Business" price="29" plan="per month" id="featured" />
                    <Card title="Developer" price="49" plan="per month" />
                </div>
            </div>
        </div>
    )
}

export default Pricing
