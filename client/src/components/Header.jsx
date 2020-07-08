import React from 'react'
import HeaderItem from './HeaderItem'

import logo from '../assets/images/logo_white.png';

function Header() {

    const headerItems = [{title: "Esittely", link: "/"}, 
    {title: "Terapia", link: "therapy"}, {title: "Yhteystiedot", link: "contact"}]

    return (
        <header className="header-container font-header row d-flex align-items-center text-center mx-0 mb-2 py-md-3 py-2">
            <div className="logo col-12 col-md-3">
                <img className="logo" src={logo} alt={"logo"} />
            </div>
            <div className="header-items col-12 col-md-9 row mx-0">
                {
                    headerItems.map(item => <HeaderItem classes={"col-4"} title={item.title} link={item.link} />)
                }
            </div>
        </header>
    )
}

export default Header
