import React from 'react'
import './Card.css'

const Flashcard = ({front, back, flipped, onFlip}) => {
    return (
        <div className="flip-card" onClick={onFlip}>
            <div className={`flip-card-inner ${flipped ? "flipped": ""}`}>
                <div className="flip-card-front">
                    <div>{front}</div>
                </div>
                <div className="flip-card-back">
                    <div>{back}</div>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;