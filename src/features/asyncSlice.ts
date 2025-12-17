import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: []
}
const API = "http://localhost:3000/data"
export const getData = createAsyncThunk("async/getData", async () => {
    try {
        let res = await fetch(API)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
})
export const deleteData = createAsyncThunk("async/deleteData", async (id:number, { dispatch }) => {
    try {
        await fetch(`${API}/${id}`, { method: "DELETE" })
        dispatch(getData())
    } catch (error) {
        console.error(error);
    }
})
export const statusData = createAsyncThunk("async/statusData", async (e: null | { id: number, status: boolean, name: string }, { dispatch }) => {
    try {
        await fetch(`${API}/${e?.id}`, { method: "PUT", headers: { "Content-type": "application/json" }, body: JSON.stringify({ ...e, status: !e?.status }) })
        dispatch(getData())
    } catch (error) {
        console.error(error);
    }
})

export const editData = createAsyncThunk("async/editData", async (e: null | { id: number, status: boolean, name: string }, { dispatch }) => {
    try {
        await fetch(`${API}/${e?.id}`, { method: "PUT", headers: { "Content-type": "application/json" }, body: JSON.stringify({ ...e, name: e?.name }) })
        dispatch(getData())
    } catch (error) {
        console.error(error);
    }
})
export const addData = createAsyncThunk("async/addData", async (inp: string, { dispatch }) => {
    try {
        await fetch(API, { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ name: inp, status: false }) })
        dispatch(getData())
    } catch (error) {
        console.error(error);
    }
})
export const todoSlice = createSlice({
    name: "async",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})
export default todoSlice.reducer;