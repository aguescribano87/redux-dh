import { NoteItem } from "./noteItem"

export const ListNotes = ({ notes }) => {

    return (
        <div className="notesCont">
            {notes.map((note, i) => (
                <NoteItem key={i} note={note} />
            ))}
        </div>
    )
}