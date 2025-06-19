import { useState } from 'react'
import FlashcardContainer from './components/FlashcardContainer'

import './App.css'

function App() {

  return (
    <>
    <h1>Guess the Word: Computer Science Edition!</h1>
    <h4>How good are you at guessing words based on emojis? Test your knowledge with these CS themed cards!!</h4>
    <div className="flashcards">
       <FlashcardContainer/>
    </div>
   
      
    </>
  )
}

export default App
