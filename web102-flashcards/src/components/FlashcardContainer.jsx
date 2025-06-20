import React from 'react'
import { useState } from 'react'
import cards from "../data/cards.jsx"
import Flashcard from "./Card"
import "./CardContainer.css"


const FlashcardContainer = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currCard = cards[currIndex];
    console.log(currCard);

    const nextCard = () => {
        setIsFlipped(false);
        setCurrIndex((prev) => {
        let randomIndex;
        do {
        randomIndex = Math.floor(Math.random() * cards.length);
        } while (randomIndex === prev && cards.length > 1); 
        return randomIndex;
        });
    }
    const prevCard = () => {
        setIsFlipped(false);
        setCurrIndex((curr) => (curr - 1 + cards.length) % cards.length)
    }
    return (
        <div>
        <Flashcard
            front={currCard.front}
            back={currCard.back}
            flipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
        />
        <div style={{ marginTop: "20px" }}>
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
        </div>
        </div>
    )

}

export default FlashcardContainer;