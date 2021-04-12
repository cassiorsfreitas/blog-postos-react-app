import React from 'react'

import './style.css'

function Card(props) {

    const name = props.name
    const id = props.id

    return (
        <div className="card" onClick={() => props.onClick(id)}>
            <div className="light-true"></div>
            <h3>{name}</h3>
        </div>
    )
}

export default Card