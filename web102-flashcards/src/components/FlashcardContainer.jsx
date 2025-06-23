import React from 'react'
import { useState } from 'react'
import cards from "../data/cards.jsx"
import Flashcard from "./Card"
import "./CardContainer.css"


const FlashcardContainer = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [guess, setGuess] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);


    const currCard = cards[currIndex];
    console.log(currCard);

    const nextCard = () => {
        setIsFlipped(false);
        setCurrIndex((prev) => (prev + 1) % cards.length);
        setIsCorrect(null); 
    }
    const prevCard = () => {
        setIsFlipped(false);
        setCurrIndex((curr) => (curr - 1 + cards.length) % cards.length)
        setIsCorrect(null);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Guessed:", guess);
        const correctAnswer = currCard.back.toLowerCase().trim();
        const userAnswer = guess.toLowerCase().trim();
        setIsCorrect(userAnswer === correctAnswer);
        setGuess('');
    }
    return (
        <div>
        <Flashcard
            front={currCard.front}
            back={currCard.back}
            flipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
            correct={isCorrect}
        />
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder=""
            />
            <button type="submit">Guess</button>
        </form>
        <div style={{ marginTop: "20px" }}>
            <button 
            onClick={prevCard}
            disabled={currIndex === 0}
            className={currIndex === 0 ? "nav-button disabled" : "nav-button"}>
                Previous
            </button>
            <button 
            onClick={nextCard}
            disabled={currIndex === cards.length - 1}
            className={currIndex === cards.length - 1 ? "nav-button disabled" : "nav-button"}>
                Next
            </button>
        </div>
        </div>
    )

}

export default FlashcardContainer;