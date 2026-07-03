import Notes from './components/Note'
import { useEffect, useState } from 'react'
import axios from 'axios'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note ...')

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes');

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id === id ? response.data : note))
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response);
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notes notes={notes} toggleImportanceOf={(id) => toggleImportanceOf(id)}></Notes>
      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App