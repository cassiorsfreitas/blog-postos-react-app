import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

import './style.css'

import CardDefault from '../../cards/cardDefault'
import CardStatus from '../../cards/cardStatus'


function LeftMenu(props) {

    const list = props.list

    const [menuActive, setMenuActive] = useState(false)

    function handleMenu() {
        const newMenuActive = !menuActive
        setMenuActive(newMenuActive)
    }

    return (
        <div className="container-menu">
            <MdMenu size={30} className="icon-menu" onClick={handleMenu} />
            <CardStatus />
            <div className={`menu-${menuActive}`}>
                {list.map(card => (
                    <div key={card.id}>
                        <CardDefault id={card.id} name={card.name} onClick={props.onClick} visible={card.visible} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default LeftMenu