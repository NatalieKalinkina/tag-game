import React from "react";
import './TagGame.css';
import { Card } from "../Card/Card";


export function TagGame({ cards, isWin, setIsWin, clickCounter, setClickCounter, setCards }) {

    const onMoveCard = (card) => {
        if (card.id === 16) return;
        const index16 = cards.findIndex(c => c.id === 16);
        const cardIndex = cards.findIndex(c => c.id === card.id);
        if (![index16 - 1, index16 + 1, index16 - 4, index16 + 4].includes(cards.findIndex(c => c.id === card.id))) {
            return
        }
        setClickCounter(clickCounter + 1);
        const newCardsArray = cards.slice();
        [newCardsArray[index16], newCardsArray[cardIndex]] = [newCardsArray[cardIndex], newCardsArray[index16]];

        setCards(newCardsArray);

        const checkWin = newCardsArray.every(item => {
            return item.id === newCardsArray.indexOf(item) + 1;
        });

        if (checkWin === true) {
            setIsWin(true);
        }
    }

    return (
        <section className="tag-game">
            {(isWin === false) ? (
                <div className="tag-game__field">
                    {
                        cards.map(card => {
                            return <Card key={card.id} array={cards} card={card} id={card.id} url={card.url} onMoveCard={onMoveCard} />
                        })
                    }

                </div>
            ) : (
                <div className="tag-game__field_type_win"></div>
            )}
        </section>
    )
}