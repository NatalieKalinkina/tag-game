import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import './Header.css'

export function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="лого проекта" /></Link>
            <nav className="header__theme">
                <ul className="header__theme-list">
                    <li className="header__theme-list-item">
                        <div className="header__icon header__icon_type_light"></div>
                    </li>
                    <li className="header__theme-list-item">
                        <div className="header__icon header__icon_type_dark"></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}