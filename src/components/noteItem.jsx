
export const NoteItem = ({ note }) => {

    return (
        <div className="noteItem">
            <p>{note.text}</p>
            <button>delete</button>
        </div>
    )
}