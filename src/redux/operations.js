import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character');

            return data.results;     
        } catch (e) {
            console.error("operation error", e);
            return thunkAPI.rejectWithValue(e.message);
        }
});