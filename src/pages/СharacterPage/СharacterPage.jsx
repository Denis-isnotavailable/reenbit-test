
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";

import { СharacterPageStyled, ButtonThumbStyled, CharacterImageThumbStyled} from "./СharacterPage.styled"

const СharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => { 
        const fetchCharacter = async () => {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(data)
        }

        fetchCharacter();
    }, [id]);
    
    const { name, image, gender, status, species, origin, type } = character;

    return (
        <СharacterPageStyled>
            <ButtonThumbStyled to={"/"} >                
                <AiOutlineArrowLeft size={24} /> GO BACK
            </ButtonThumbStyled>

            <CharacterImageThumbStyled>
                <img src={image} alt="avatar" width={150} height={148} />
            </CharacterImageThumbStyled>

            <h2>{ name }</h2>
            <h3>Informations</h3>
            <ul>
                <li>
                    <h4>Gender</h4>
                    <p>{ gender }</p>
                </li>
                <li>
                    <h4>Status</h4>
                    <p>{ status }</p>
                </li>
                <li>
                    <h4>Specie</h4>
                    <p>{ species }</p>
                </li>
                <li>
                    <h4>Origin</h4>
                    <p>{ origin?.name }</p>
                </li>
                <li>
                    <h4>Type</h4>
                    <p>{ type ? type : "Unknown" }</p>
                </li>
            </ul>
        </СharacterPageStyled>
    );
}

export default СharacterPage;