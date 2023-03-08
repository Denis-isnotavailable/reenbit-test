import CharactersList from "components/CharactersList/CharactersList";
import Search from "components/Search/Search";
import { LogoBoxStyled, MainPageStyled } from "./MainPage.styled";
import logoMob from "../../images/logo-mob.png";
import { useState } from "react";
import logoDeskTop from "../../images/logo-dt.png"


const MainPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    return (
        <MainPageStyled>
            <LogoBoxStyled>
                <img src={windowHeight <= 767 ? logoMob : logoDeskTop} alt="logo" />
            </LogoBoxStyled>
            <Search />
            <CharactersList />
        </MainPageStyled>        
    );
}

export default MainPage;