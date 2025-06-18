import "./cards.css"
const Rules = () => (
    <div className="rules-text">
        <strong>How to Play:</strong>
        <ul>
          <li>The front of each flashcard shows a series of emojis which represents something related to computer science</li>
          <li>Your mission is to guess what this term could be before clicking on the card to flip it and see the answer</li>
          <li>Click the arrows below to see either the previous or the next card</li>
        </ul>
    </div>
);


const cards = [
    {front:<Rules/>, back:""},
    {front: "🐇💐💻", back: "Grace Hopper Conference"},
    {front: "😴⚙️🌐", back: "REST API"},
    {front: "➗➕⚔️🚩", back: "Divide and Conquer"},
    {front: "⚛️🧠💻", back: "React"},
    {front: "🍴🛤️", back: "Fork"},
    {front: "👨‍💻🔐🧩", back: "Alan Turing"},
    {front: "🧑🏻‍💻➡️🚶‍♀️", back: "CodePath"},
    {front: "🦀", back: "Rust"},
    {front: "👩‍💻📜✨❤️", back: "Ada Lovelace"},
    {front: "🔄🪞", back: "Recursion"},
    {front: "🐍", back: "Python"},
    {front: "🛠️🎭", back: "Polymorphism"},

];

export default cards;




// 🐇💐💻 - Grace Hopper

// 🧑🏻‍💻➡️🚶‍♀️ - CodePath

// ⚛️🧠💻 - React

// 🐍 Python

// 🦀 rust

// ➗➕⚔️🚩divide and conquer

// 🔄🪞Recursion

// polymorphism 🛠️🎭

// 😴⚙️🌐 - Rest api

// 🍴🛤️ - fork

// 👩‍💻📜✨❤️ - Ada Lovelace
// Alan Turing: 	👨‍💻🔐🧩

