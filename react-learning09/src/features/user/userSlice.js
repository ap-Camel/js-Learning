import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    loggedIn: false
}

// export const authenticateUser = createAsyncThunk("authenticateUser", async () => {
//     const res = await fetch("https://localhost:7068/users")
// })

// export const logUserIn = createAsyncThunk("user/logUserIn", (user) => {
    
// })

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.role = payload.userType;
            state.email = payload.email;
            state.loggedIn = true;
        },
        loggOut: (state, action) => {
            state.loggedIn = false;
        }
    }
})

export const {setUser, loggOut} = userSlice.actions;

export default userSlice.reducer;