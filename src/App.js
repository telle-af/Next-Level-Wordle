import { useEffect, useState } from "react";
import Wordle from './components/Wordle'

function App() {

  const[solution,setSolution] = useState(null)
  const [mode, setMode] = useState('programming')
  
  useEffect(() => {

    if (mode === 'programming') {

      const wordbank1 = ["react", "swift", "query", "stack", "linux", "float", "array", "token", "scrum", "agile", "loops", "cloud", "debug", "unity", "class"]
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank1[randomInteger])

    } else if (mode === 'tagalog') {

      const wordbank2 = ["tulay", "butas", "bango", "mundo", "sigaw", "plato", "buwan", "buhat", "itlog", "galit", "ligaw", "kalat", "hilaw", "tahol", "rosas"]
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank2[randomInteger])

    } else if (mode === 'cebuano') {

      const wordbank3 = ["kamot", "gugma", "human", "libog", "lawas", "adlaw", "didto", "bulad", "sulod", "karon", "hubog", "kapoy", "humot", "tanan", "balay"]
      const randomInteger = [Math.floor(Math.random()*15)]
      setSolution(wordbank3[randomInteger])
      
    }
  }, [setSolution, mode])


  return (
      <div className="App">
      <h1>Next-level Wordle</h1>
      <h2>Multi-mode | Multi-language</h2>
      <h3>Choose mode:</h3>
      <button onClick={() => setMode('programming')}>Programming terms</button>
      <button onClick={() => setMode('tagalog')}>Tagalog terms</button>
      <button onClick={() => setMode('cebuano')}>Cebuano terms</button>
      <br></br>
      <div className="Mode">Current mode: {mode.toUpperCase()}</div>
      {solution && <Wordle solution={solution} />}
    </div>
    );
  
}

export default App