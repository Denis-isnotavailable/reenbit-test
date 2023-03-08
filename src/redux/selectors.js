import { createSelector } from "@reduxjs/toolkit";


export const selectIsLoading = state => state.charactersReducer.isLoading;
export const selectCharacters = state => state.charactersReducer.characters;

export const selectSearch = state => state.searchReducer.search;

export const selectFilteredCharacters = createSelector(
    [selectCharacters, selectSearch], (characters, search) => {

        return [...characters]
            .sort((firstChar, secondChar) => firstChar.name.localeCompare(secondChar.name))
            .filter(char => char.name.toLowerCase().includes(search.toLowerCase()));
    }
);
