import { useState } from 'react'
import './App.css'

function App() {
  const maxPoints = 12
  const [blueTeam, setBlueTeam] = useState(0)
  const [redTeam, setRedTeam] = useState(0)

  const increment = (setTeam, value) => {
    if (value < maxPoints) setTeam(value + 1)
  }
  const decrement = (setTeam, value) => {
    if (value > 0) setTeam(value - 1)
  }
  const reset = () => {
    setBlueTeam(0)
    setRedTeam(0)
  }
  const winner = () => {
    if (blueTeam === redTeam || (blueTeam < maxPoints && redTeam < maxPoints)) {
      return null
    }
    return blueTeam > redTeam ? "Azul" : "Vermelho"
  }

  return (
    <div className="container">
      <h1>Contador para Truco</h1>
      <div className={winner() ? "winner" : "hidden"}>Time { winner() } venceu 🏆</div>
      <div className="teams">
        <div className="team blue">
          <h2>Time Azul</h2>
          <div className="controls">
            <button onClick={() => increment(setBlueTeam, blueTeam)}>
              <span className="change-point-btn">+</span>
            </button>
            <span className="points">{blueTeam}</span>
            <button onClick={() => decrement(setBlueTeam, blueTeam)}>
              <span className="change-point-btn">-</span>
            </button>
          </div>
        </div>
        <div className="team red">
          <h2>Time Vermelho</h2>
          <div className="controls">
            <button onClick={() => increment(setRedTeam, redTeam)}>
              <span className="change-point-btn">+</span>
            </button>
            <span className="points">{redTeam}</span>
            <button onClick={() => decrement(setRedTeam, redTeam)}>
              <span className="change-point-btn">-</span>
            </button>
          </div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Zerar Pontuação</button>
    </div>
  )
}

export default App
