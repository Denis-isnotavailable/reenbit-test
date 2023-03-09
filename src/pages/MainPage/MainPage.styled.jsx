import styled from "styled-components";
import logoMob from "../../images/logo-mob.png";
import logoDeskTop from "../../images/logo-dt.png";

export const MainPageStyled = styled.div`
    
`;

export const LogoBoxStyled = styled.div`
    width: 312px;
    height: 104px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 92px;
    margin-bottom: 32px;
    background-image: url(${logoMob});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
        width: 600px;
        height: 200px;
        margin-top: 86px;
        margin-bottom: 16px;
        background-image: url(${logoDeskTop});
    }
`;

