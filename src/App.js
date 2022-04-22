import { useEffect, useState } from "react";
import Wordle from './components/Wordle'
import {wordbank1, wordbank2, wordbank3, wordbank4} from './components/Wordbank'

function App() {

  const[solution,setSolution] = useState(null)
  const [mode, setMode] = useState('programming')
  
  useEffect(() => {

    if (mode === 'programming') {
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank1[randomInteger])

    } else if (mode === 'tagalog') {
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank2[randomInteger])

    } else if (mode === 'cebuano') {
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank3[randomInteger])
      
    } else if (mode === 'cities & countries') {
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank4[randomInteger])
    }

  }, [setSolution, mode])


  return (
      <div className="App">
      <h1>Next-level Wordle</h1>
      <h2>Multi-mode | Multi-language</h2>
      <h3><b>Step 1:</b> Choose mode:</h3>
      <button onClick={() => setMode('programming')}>Programming terms</button>
      <button onClick={() => setMode('tagalog')}>Tagalog terms</button>
      <button onClick={() => setMode('cebuano')}>Cebuano terms</button>
      <button onClick={() => setMode('cities & countries')}>Cities and countries</button>
      <div className="Mode">Current mode: {mode.toUpperCase()}</div>
      <h3><b>Step 2:</b>Play using your computer keyboard. :)</h3>
      {solution && <Wordle solution={solution} />}
    </div>
    );
  
}

export default App