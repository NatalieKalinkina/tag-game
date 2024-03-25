import React, { useState, useEffect } from "react";
import './Games.css';
import { Navbar } from "../Navbar/Navbar";
import { EndGamePopup } from "../EndGamePopup/EndGamePopup";
import { SettingsPopup } from "../SettingsPopup/SettingsPopup";
import { TagGame } from "../TagGame/TagGame";
import { generateCards, winCombination } from "../../utils/generateCards";

export function Games() {

    const [cards, setCards] = useState(generateCards);
    const [isWin, setIsWin] = useState(false);
    const [clickCounter, setClickCounter] = useState(0);
    const [timer, setTimer] = useState(60);
    const [isEndGamePopupOpen, setIsEndGamePopupOpen] = useState(false);
    const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
    const [isTimerActive, setIsTimerActive] = useState(false);
    let gameTimer;
    const timerSavedData = localStorage.getItem('timer');

    useEffect(() => {
        if (isTimerActive && (clickCounter !== 0)) {
            gameTimer = setTimeout(reduceTimer, 1000);
        }
    })

    useEffect(() => {
        if (isTimerActive) {
            if ((timer < 1) && !isWin) {
                clearTimeout(gameTimer);
                setTimer(0);
                setIsEndGamePopupOpen(true);
            } else if (((timer > 0) || (timer < 1)) && isWin) {
                clearTimeout(gameTimer);
                setIsEndGamePopupOpen(true);
            }
        } else {
            if (isWin) {
                setIsEndGamePopupOpen(true);
            }
        }
    }, [timer, isWin])

    const onResetGame = () => {
        setIsWin(false);
        setCards(generateCards);
        setClickCounter(0);
        if (timerSavedData) {
            setTimer(timerSavedData)
        };
        setIsEndGamePopupOpen(false);
        clearTimeout(gameTimer);
    }

    const onSettingsPopupOpen = () => {
        if (clickCounter !== 0) { onResetGame() };
        setIsSettingsPopupOpen(true);
    }

    const onSettingsPopupClose = () => {
        setIsSettingsPopupOpen(false)
    }

    const onSettingsSave = (time) => {
        if (time !== 0) {
            const timeForLS = time;
            setTimer(time);
            localStorage.setItem('timer', timeForLS);
        }
        setIsSettingsPopupOpen(false);
    }

    const onWinCombination = () => {
        setCards(winCombination);
    }

    const reduceTimer = () => {
        setTimer(timer - 1);
    }



    return (
        <section className="games">
            <Navbar handleResetClick={onResetGame} clickCounter={clickCounter} handleSettingsClick={onSettingsPopupOpen} time={timer} isTimerActive={isTimerActive} handleWinClick={onWinCombination} />
            <TagGame cards={cards} isWin={isWin} setIsWin={setIsWin} clickCounter={clickCounter} setClickCounter={setClickCounter} setCards={setCards} />
            <SettingsPopup isOpened={isSettingsPopupOpen} onPopupClose={onSettingsPopupClose} onSave={onSettingsSave} timerSavedData={timerSavedData} isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} gameTimer={gameTimer} />
            <EndGamePopup isOpened={isEndGamePopupOpen} counter={clickCounter} onPopupClose={onResetGame} isWin={isWin} />
        </section>
    )
}