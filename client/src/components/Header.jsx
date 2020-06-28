import React from 'react'
import HeaderItem from './HeaderItem'

import logo from '../assets/images/logo.png';

function Header() {
    const headerItems = [{title: "Me", link: "/"}, 
    {title: "Therapy", link: "therapy"}, {title: "Contact", link: "contact"}]
    return (
        <header className="header-container font-header row text-center py-md-3 py-2">
            <div className="logo col-12 col-md-3">
                <img className="logo" src={logo} alt={"logo"} />
            </div>
            <div className="header-items col-12 col-md-9 row">
                {
                    headerItems.map(item => <HeaderItem classes={"col-4"} title={item.title} link={item.link} />)
                }
            </div>
        </header>
    )
}

export default Header
