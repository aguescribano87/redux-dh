import { useDispatch } from "react-redux"
import { deleteNote } from "../redux/notesSlice"


export const NoteItem = ({ note }) => {
    const dispatch = useDispatch()

    const click = () => dispatch(deleteNote(note))

    return (
        <div className="noteItem">
            <p>{note.text}</p>
            <button onClick={click}>delete</button>
        </div>
    )
}