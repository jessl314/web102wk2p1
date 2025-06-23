import React from 'react'
import './Card.css'

const Flashcard = ({front, back, flipped, onFlip, correct}) => {
    let borderColor = "neutral-border";
    if (correct === true) borderColor = "green-border";
    else if (correct === false) borderColor = "red-border";
    else borderColor = "neutral-border";

    return (
        <div className="flip-card cursor-pointer" onClick={onFlip}>
            <div className={`flip-card-inner ${flipped ? "flipped": ""}`}>
                <div className={`flip-card-front card-face ${borderColor}`}>
                    <div>{front}</div>
                </div>
                <div className={`flip-card-back card-face ${borderColor}`}>
                    <div>{back}</div>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;