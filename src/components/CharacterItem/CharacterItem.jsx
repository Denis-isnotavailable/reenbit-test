import { NavLink } from "react-router-dom";

import { CharacterImageThumbStyled, CharacterItemStyled, DescriptionThumbStyled } from "./CharacterItem.styled";


const CharacterItem = ({character}) => {

    return (
        <CharacterItemStyled>
            <NavLink to={`${character.id}`} style={{textDecoration: "none"}}>
                <CharacterImageThumbStyled>
                    <img src={character.image} alt="characterAvatar" width={312} height={232} />
                </CharacterImageThumbStyled>
                
                <DescriptionThumbStyled>
                    <h2>{character.name}</h2>

                    <p>{character.species}</p>
                </DescriptionThumbStyled>
            </NavLink>              
        </CharacterItemStyled>
    );
}

export default CharacterItem;