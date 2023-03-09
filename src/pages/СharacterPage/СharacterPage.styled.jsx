import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const СharacterPageStyled = styled.div`
    width: 312px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;

    h2 {
        margin-bottom: 34px;        
        text-align: center;

        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 1.19;

        color: #081F32;

    }

    h3 {
        margin-bottom: 16px;

        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.2;
        letter-spacing: 0.15px;

        color: #8E8E93;
    }

    ul {
        padding-left: 16px;
        padding-right: 16px;
    }

    li {
        padding-top: 9px;
        padding-bottom: 12px;
        border-bottom: 1px solid #F2F2F7;        
    }

    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.15px;

        color: #081F32;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: 0.25px;

        color: #6E798C;
    }

     @media (min-width: 1020px) {
        width: 920px;
        padding: 21px 50px;

        h2 {
            margin-bottom: 48px;
            font-size: 48px;
            line-height: 1.17;
        }

        h3 {
            text-align: center;
        }

        ul {
            width: 413px;
            margin-left: auto;
            margin-right: auto;
        }
     }
`;

export const ButtonThumbStyled = styled(NavLink)`
    width: 108px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 72px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;

    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.17;

    color: #000000;

    @media (min-width: 1020px) {
        margin-bottom: 26px;
    }
`;

export const CharacterImageThumbStyled = styled.div`
    width: 150px;
    height: 148px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 28px;
    
    border: 5px solid #dbdbdf;
    border-radius: 150px;

    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1020px) {
        width: 300px;
        height: 300px;

        margin-bottom: 12px;
    }
`;