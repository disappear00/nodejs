import Note from './components/Note'
import { useState } from 'react'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  return (
    <div>
      <h1>Notes</h1>
      <Note notes={notes}></Note>
    </div>
  )
}

export default App