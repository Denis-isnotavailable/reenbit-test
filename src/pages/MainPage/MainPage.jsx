
import CharactersList from "components/CharactersList/CharactersList";
import Search from "components/Search/Search";
import { LogoBoxStyled, MainPageStyled } from "./MainPage.styled";
import GoogleAuth from "components/GoogleAuth/GoogleAuth";



const MainPage = () => { 

    return (
        <MainPageStyled>
            <GoogleAuth />
            <LogoBoxStyled />
            <Search />
            <CharactersList />
        </MainPageStyled>        
    );
}

export default MainPage;