import React from 'react'
import { Link } from 'react-router-dom'

const HeaderItem = (props) => {
    return (
        <h2 className={("header-item " + (props.classes ? props.classes : ""))}>
            <Link to={props.link}>{props.title}</Link>
        </h2>
    )
}

export default HeaderItem
