import React from 'react'
import image from './quality-work.gif'
import image2 from './pedro-pascal.gif'

export default function Conclusion({ isCorrect, solution, turn }) {
  return (
    <div className="conclusion">
      {isCorrect && (
        <div>
          <h1>NOICE!</h1>
          <p>The word is:</p>
          <p className="solution">{solution}</p>
          <p><b>You found the solution in {turn} guess(es) :)</b></p>
          <img src={image} alt="Kid thumbs up while on computer"/>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Sadge :(</h1>
          <p>Solution:</p>
          <p className="solution">{solution}</p>
          <p><b>Better luck next time, I guess.</b></p>
          <img src={image2} width={460} alt="Pedro Pascal crying and laughing"/>
        </div>
      )}
    </div>
  )
}