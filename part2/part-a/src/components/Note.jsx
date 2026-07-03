import axios from 'axios'
const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make not important' : 'make important'
    return (
        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}


const Notes = ({ notes, toggleImportanceOf }) => {

    return (
        <ul>
            {notes.map(
                note =>
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}></Note>
            )}
        </ul>
    )
}

export default Notes