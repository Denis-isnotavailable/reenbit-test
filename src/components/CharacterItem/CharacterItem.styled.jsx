import styled from "styled-components";


export const CharacterItemStyled = styled.li`
    :not(:last-child) {
        margin-bottom: 32px;
    }    

    background: #FFFFFF;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;

    @media (min-width: 768px) {
        :not(:last-child) {
        margin-bottom: 0;
    }
    }
`;

export const CharacterImageThumbStyled = styled.div`
    width: 312px;
    height: 232px;

    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1020px) {
        width: 240px;
        height: 168px;
    }
`;

export const DescriptionThumbStyled = styled.div`
    padding: 12px 16px;
    font-style: normal;
    line-height: 1.5;

    h2 {
        max-width: 208px;
        margin-bottom: 1px;

        font-weight: 500;
        font-size: 20px;        
        letter-spacing: 0.15px;

        color: rgba(0, 0, 0, 0.87);        
    }

    p {
        font-weight: 400;
        font-size: 14px;        
        letter-spacing: 0.25px;

        color: rgba(0, 0, 0, 0.6);
    }
`;

