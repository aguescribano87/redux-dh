const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    notes: [
        {
            id: 1,
            text: "Hola a todos"
        },
        {
            id: 2,
            text: "Estamos en la clase de REDUX"
        },
    ],
    loading: false,
    error: false
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        createNewNote: (state, action) => {
            return { notes: [...state.notes, { ...action.payload }] }
        }
    }
})

export const { createNewNote } = notesSlice.actions

export default notesSlice.reducer
