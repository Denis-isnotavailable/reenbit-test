import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./operations";

const initialState = {
    characters: [],
    isLoading: false,
    error: null,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                    state.characters = action.payload;                    
                    state.isLoading = false;
                    state.error = null;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const charactersReducer = charactersSlice.reducer;