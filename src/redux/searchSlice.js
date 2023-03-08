import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",

    initialState: {search: ""},

    reducers: {
        searchSet(state, action) {
            state.search = action.payload;
        }
    }
});

export const { searchSet } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;