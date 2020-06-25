import React from 'react'
import HeaderItem from './HeaderItem'

function Header() {
    return (
        <header className="header-container row col-12 py-2">
            <div className="logo col-6 col-md-2">

            </div>
            <div className="header-items col-6 col-md-10 row">
                <HeaderItem title={"Me"} classes={"col-12 col-md-4"} link={"/"} />
                <HeaderItem title={"Therapy"} classes={"col-12 col-md-4"} link={"therapy"}  />
                <HeaderItem title={"Contact"} classes={"col-12 col-md-4"} link={"contact"}  />
            </div>
        </header>
    )
}

export default Header
