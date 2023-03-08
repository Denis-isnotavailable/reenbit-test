import styled from "styled-components";


export const CharactersListStyled = styled.ul`
    width: 312px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 768px) {
        width: 656px;
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }

    @media (min-width: 1020px) {
        width: 1020px;
        gap: 24px 20px;
        padding-left: 0;
        padding-right: 0;
    }

`;

export const LoadingStyled = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 200px;
`;