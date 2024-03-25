import React, { useState } from "react";
import './Card.css';

export function Card({ array, card, id, url, onMoveCard }) {

    const [isOnRightPlace, setIsOnRightPlace] = useState(false);

    return <img className={`card grid-${array.indexOf(card)} ${(isOnRightPlace === true) && 'card_right-place'} ${(id === 16) && 'card-16'}`} src={url} alt="часть картинки" onClick={() => onMoveCard({ url, id })} ></img>

}