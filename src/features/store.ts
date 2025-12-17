import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [
        {
            id: 1,
            name: "Ali",
            status: true
        },
    ]
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            state.data = state.data.filter((e) => e.id != action.payload)
        },
        addUser: (state, action) => {
            state.data = [...state.data, { ...action.payload }]
        },
        editUser: (state, action) => {
            const { id, name, status } = action.payload;
            state.data = state.data.map(item => item.id == id ? { ...item, name, status } : item)
        },
        checkout: (state, action) => {
            const id = action.payload;
            state.data = state.data.map(item => item.id == id ? { ...item, status: !item.status } : item)
        }
    }
})
export const { deleteUser, addUser, editUser, checkout } = todoSlice.actions
export default todoSlice.reducer;
