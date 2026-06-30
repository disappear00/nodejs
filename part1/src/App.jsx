import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    let updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(right + updateLeft)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    let updateRight = right + 1
    setRight(updateRight)
    setTotal(updateRight + left)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left"></Button>
      <Button onClick={handleRightClick} text="right"></Button>
      {right}
      <History allClicks={allClicks}></History>
      <p>{total}</p>
    </div>
  )
}
export default App