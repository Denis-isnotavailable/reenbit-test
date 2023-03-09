import styled from "styled-components";


export const GoogleAuthStyled = styled.div`
    position: absolute;
    top: 12px;
    left: 24px;

    width: 250px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #b7b7c0;       
    }
`;

export const NameBoxStyled = styled.div`
    position: absolute;
    top: 12px;
    left: 24px;

    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;     
    font-size: 19px; 
    margin: 5px;
    padding: 0px 10px;
`;

export const LogOutStyled = styled.button`
    position: absolute;
    top: 12px;
    left: 250px;

    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;     
    font-size: 19px; 
    margin: 5px;
    padding: 0px 10px;
    background-color: #fff;

    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #b7b7c0;       
    }
`;