import ToggleLights from "./components/ToggleLights"
import ClickCounter from "./components/ClickCounter"
import LottoNumbers from "./components/LottoNumbers"
import { useState } from "react"

const App = () => {
  const [isLightOn, setIsLightOn] = useState<boolean>(true)
  const [lottoNumbers, setLottoNumbers] = useState<string[]>([])
  const [counter, setCounter] = useState<number>(0)

  const handleToggleLights = () => {
    setIsLightOn(!isLightOn)
  }

  const generateRandom = (num1: number, num2: number) => {
    return Math.floor(Math.random()*(num1 - num2 + 1)) + num2
  }
  const generateLottoNumbers = (min: number , max: number) => {
      const randomeNumbers: string[] = [] 
      for (let i = 0; i < 7; i++) {
          randomeNumbers.push(`${generateRandom(min, max)},`)
      }
      setLottoNumbers(randomeNumbers)
  }

  const handleClickCounter = () => {
    setCounter(counter => counter + 1)
  }

  return (
    <div>
      <h1>Exercise</h1>

      <h2>Light Toggle</h2>
      <ToggleLights onToggle={handleToggleLights}/>
      <div className="output" style={{
        backgroundColor: isLightOn ? 'white' : 'black',
        display: 'block',
        width: 150,
        height: 150
      }}>Change this background color using style attribute</div>

      <LottoNumbers getNumbers={() => generateLottoNumbers(1, 50)} />
      <div className="output">{lottoNumbers}</div>

      <ClickCounter handleClickCounter={handleClickCounter}/>
      <div className="output">Counter: {counter}</div>
    </div>
  )
}

export default App