import React, { useState } from "react";
import './Navbar.css';

import { changeTimerFormat } from "../../utils/changeTimeFormat";

export function Navbar({ handleResetClick, clickCounter, handleSettingsClick, time, isTimerActive, handleWinClick }) {

    return (
        <section className="navbar">
            <p className="navbar__text navbar__counter" onClick={handleWinClick}> Ходов: {clickCounter} </p>
            {isTimerActive && (<p className="navbar__text navbar__timer">{changeTimerFormat(time)}</p>)}
            <div className="navbar__icons">
                <div className="navbar__settings" onClick={handleSettingsClick}></div>
                <div className="navbar__reset" onClick={handleResetClick}></div>
            </div>

        </section>
    )
}