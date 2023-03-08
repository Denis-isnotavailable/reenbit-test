import styled from "styled-components";


export const SearchStyled = styled.div`
    position: relative;
    width: 312px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 32px;

    div {
        position: absolute;
        top: 16px;
        left: 16px;
    }

    input {
        width: 246px;
        height: 22px;
        padding: 16px 16px 16px 48px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 8px;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;

        color: rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 768px) {
        width: 656px;

        input {
            width: 590px;
        }
    }

    @media (min-width: 1020px) {
        width: 1020px;
        margin-bottom: 51px;

        input {
            width: 954px;
        }
    }
`;