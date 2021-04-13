import React from 'react'

import './style.css'

import CardDefault from '../../cards/cardDefault'
import CardStatus from '../../cards/cardStatus'

function LeftMenu(props) {

    const list = props.list

    return (
        <div className="container-menu">
            <CardStatus />

            {list.map( card => (
                <div key={card.id}>
                    <CardDefault id={card.id} name={card.name} onClick={props.onClick} visible={card.visible}/>
                </div>
            ))}
        </div>
    )
}


export default LeftMenu