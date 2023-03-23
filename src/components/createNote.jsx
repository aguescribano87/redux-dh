import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewNote } from '../redux/notesSlice';

export const CreateNote = ({ cant }) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({ id: 0, note: "" })

    const handleChange = (event) => setInputValue({ id: cant + 1, text: event.target.value })

    const handleCreate = () => dispatch(createNewNote(inputValue))

    return (
        <>
            <input placeholder='New note' onChange={handleChange} />
            <button onClick={handleCreate}>Crear</button>
        </>
    )
}