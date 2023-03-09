import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",

    initialState: {
        token: null,
        isAuth: false,
        userName: ""
    },

    reducers: {
        authSet(state, action) {
            state.token = action.payload.token;
            state.isAuth = action.payload.isAuth;
            state.userName = action.payload.userName;
        }
    }
});

export const { authSet } = authSlice.actions;
export const authReducer = authSlice.reducer;