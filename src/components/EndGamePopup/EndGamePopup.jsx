import React from "react";
import './EndGamePopup.css';
import { changeDeclension } from "../../utils/changeDeclension";

export function EndGamePopup({ isOpened, counter, onPopupClose, isWin }) {

    const handleClick = evt => {
        if (evt.currentTarget === evt.target) {
            onPopupClose();
        }
    }

    return (
        <div className={`end-game ${isOpened ? "end-game_opened" : ""}`} onClick={handleClick}>
            <div className="end-game__container">
                <h2 className="end-game__title">{isWin ? 'Поздравляем!' : 'Сожалеем:('}</h2>
                <p className="end-game__subtitle">{isWin ? `Вы завершили игру за ${changeDeclension(counter)}` : 'Вы не успели завершить игру'}</p>
                <button
                    type="button"
                    className="end-game__close-button button"
                    aria-label="Закрыть окно"
                    onClick={onPopupClose}
                ></button>
            </div>
        </div>
    )
}