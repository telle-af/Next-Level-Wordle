import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

//components
import Grid from './Grid'
import Keyboard from './Keyboard'
import Conclusion from './Conclusion'

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
  const [showConclusion, setShowConclusion] = useState(false)

  useEffect(() => {
      window.addEventListener('keyup', handleKeyup)

      if (isCorrect) {
          setTimeout(() => setShowConclusion(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
      }

      if (turn > 5) {
          setTimeout(() => setShowConclusion(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
      }

      return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  
  
    return (
        <div>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <Keyboard usedKeys={usedKeys}/>
            {showConclusion && <Conclusion isCorrect={isCorrect} turn ={turn} solution={solution} />}
        </div>
  )
}
