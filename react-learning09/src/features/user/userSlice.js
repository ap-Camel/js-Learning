import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initiaState = {

}

export const authenticateUser = createAsyncThunk("authenticateUser", async () => {
    const res = await fetch("https://localhost:7068/users")
})


const cartSlice = createSlice({
    name: "user",
    initiaState,
    reducers: {
        authenticateUser: () => {

        }
    }
})