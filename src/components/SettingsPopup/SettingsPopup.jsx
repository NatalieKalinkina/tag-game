import React from "react";
import { useState } from "react";
import './SettingsPopup.css';
import { getMinutes, getSeconds } from "../../utils/changeTimeFormat";

export function SettingsPopup({ isOpened, onPopupClose, onSave, setIsTimerActive, gameTimer }) {

    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [isEmpty, setIsEmpty] = React.useState(false);
    const [checkedCheckbox, setCheckedCheckbox] = useState(false);


    const handleClick = evt => {
        if (evt.currentTarget === evt.target) {
            onPopupClose();
        }
    }

    const changeCheckbox = () => {
        setCheckedCheckbox(!checkedCheckbox);
    }

    const handleSave = (evt) => {
        evt.preventDefault();
        const totalSeconds = minutes * 60 + seconds;
        console.log({
            'мин: ': minutes,
            'сек: ': seconds,
            'общее время: ': totalSeconds
        });
        if (checkedCheckbox) {
            if (isNaN(minutes) || isNaN(seconds) || totalSeconds === 0) {
                setIsEmpty(true);
            }
            else {
                setIsTimerActive(true);
                onSave(totalSeconds)
            }
        } else {
            setIsTimerActive(false);
            setIsEmpty(false);
            localStorage.removeItem('timer');
            clearTimeout(gameTimer);
            onSave(0);
        }
    }

    const onMinutesChange = (evt) => {
        setIsEmpty(false);
        setMinutes(parseInt(evt.target.value));
    }

    const onSecondsChange = (evt) => {
        setIsEmpty(false);
        setSeconds(parseInt(evt.target.value));
    }

    return (
        <div className={`settings ${isOpened ? "settings_opened" : ""}`} onClick={handleClick}>
            <div className="settings__container">
                <form className="settings__form" onSubmit={handleSave}>
                    <label className="settings__label">
                        Игра с таймером
                        <input className="settings__checkbox" type="checkbox" checked={checkedCheckbox}
                            onChange={changeCheckbox} />
                    </label>
                    {checkedCheckbox && (
                        <label className="settings__label">
                            Установите таймер:
                            <input className="settings__input" type="number" name="minutes" placeholder="мин" onChange={onMinutesChange} value={minutes} min="0" />
                            <span className="settings__span">:</span>
                            <input className="settings__input" type="number" name="seconds" placeholder="сек" onChange={onSecondsChange} value={seconds} min="0" />
                        </label>
                    )}

                    {/* <label className="settings__label">
                        Выберите размер поля:
                        <input className="settings__radio" id="4x4" type="radio" name="field" value="4" onChange={(e) => setSize(4)} />
                        <label className="settings__label" htmlFor="4x4">
                            4x4
                        </label>
                        <input className="settings__radio" id="6x6" type="radio" name="field" value="6" onChange={(e) => setSize(6)} />
                        <label className="settings__label" htmlFor="6x6">
                            6x6
                        </label>
                    </label> */}
                    {isEmpty && <p className="settings__empty-error">Установите время</p>}
                    <button
                        type="submit"
                        className="settings__save-button button"
                        aria-label="Сохранить изменения"
                        disabled={isEmpty}
                    >
                        Сохранить
                    </button>
                </form>
                <button
                    type="button"
                    className="settings__close-button button"
                    aria-label="Закрыть окно"
                    onClick={onPopupClose}
                ></button>
            </div>
        </div>
    )
}