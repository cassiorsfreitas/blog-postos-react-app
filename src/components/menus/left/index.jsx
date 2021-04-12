import React from 'react'

import './style.css'

import CardDefault from '../../cards/cardDefault'
import CardStatus from '../../cards/cardStatus'

function LeftMenu(props) {

    const categories = props.categories

    return (
        <div className="container-menu">
            <CardStatus />

            {categories.list.map( card => (
                <div key={card.id}>
                    <CardDefault id={card.id} name={card.name} onClick={props.onClick} />
                </div>
            ))}
        </div>
    )
}


export default LeftMenu