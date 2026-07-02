import Note from './components/Note'
import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note ...')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes');


  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <Note notes={notes}></Note>
      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App