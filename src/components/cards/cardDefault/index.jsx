import React from 'react'

import './style.css'

function Card(props) {

    const name = props.name
    const id = props.id
    const visible = props.visible
    console.log(visible)

    return (
        <div className="card" onClick={() => props.onClick(id)}>
            <div className={'light-' + visible}></div>
            <h3>{name}</h3>
        </div>
    )
}

export default Card