import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "redux/operations";
import CharacterItem from "components/CharacterItem/CharacterItem";
import { CharactersListStyled } from "./CharactersList.styled";
import { selectFilteredCharacters } from "redux/selectors";


const CharactersList = () => {
    const dispatch = useDispatch();
    const characters = useSelector(selectFilteredCharacters);   

    useEffect(() => { 
        dispatch(fetchCharacters());
    }, [dispatch]);

    return (
        <CharactersListStyled>
            {
                characters.length === 0 ? "There are no characters here..." :
                characters.map(character =>
                    <CharacterItem
                        key={character.id}
                        character={character}
                    />)
            }
        </CharactersListStyled>
                
    );
}

export default CharactersList;