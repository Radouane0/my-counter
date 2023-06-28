import { useState } from "react"

function App() {

  const [ counter, setCounter ] = useState(0)

  const increase = () => {
    setCounter(count => count + 1)
  }

  const decrease = () => {
    if(counter > 0) {
      setCounter(count => count - 1)
    }
  }

  const reset = () => {
    setCounter(0)
  }



  return (
    <div className="counter">
      <h1>Voici un compteur</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn-container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App;
