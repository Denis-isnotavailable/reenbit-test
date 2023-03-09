
import CharactersList from "components/CharactersList/CharactersList";
import Search from "components/Search/Search";
import { LogoBoxStyled, MainPageStyled } from "./MainPage.styled";



const MainPage = () => { 

    return (
        <MainPageStyled>
            <LogoBoxStyled />
            <Search />
            <CharactersList />
        </MainPageStyled>        
    );
}

export default MainPage;