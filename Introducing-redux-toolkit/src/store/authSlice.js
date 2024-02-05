import { createSlice } from "@reduxjs/toolkit";

const initialAutState = { isAuthenticated: false }
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAutState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;