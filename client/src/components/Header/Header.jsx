import "./Header.scss";
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from "react";

function Header() {
    const [menuOpen, SetMenuOpen] = useState(false)
    return (
        <>
            <div className="header">
                <div>
                    <Link className="logo" to="/">logo</Link>
                </div>

                <div className="menu" onClick={() => {
                    SetMenuOpen(!menuOpen)
                }}>
                    <span className="menu__span"></span>
                    <span className="menu__span"></span>
                    <span className="menu__span"></span>
                </div>
                <ul className={menuOpen ? "open" : "nav"}>
                    {/* <ul className="nav"> */}
                    <li className="nav__list"> <NavLink className="nav__link" to="/about">About</NavLink></li>
                    <li className="nav__list"> <NavLink className="nav__link" to="/gallery">Gallery</NavLink></li>
                    <li className="nav__list"> <NavLink className="nav__link" to="/mygallery">My Gallery</NavLink></li>
                </ul>
            </div>

        </>
    );
}

export default Header;
