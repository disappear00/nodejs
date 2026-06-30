import { useState } from 'react'
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
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>{total}</p>
    </div>
  )
}
export default App