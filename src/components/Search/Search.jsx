import { SearchStyled } from "./Search.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "redux/selectors";
import { searchSet } from "redux/searchSlice";


const Search = () => {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch();    

    const setSearchValue = (value) => {       
        dispatch(searchSet(value));
    }

    return (
        <SearchStyled>
            <div><AiOutlineSearch size={24} /></div>
            <input
                type="text"
                placeholder="Filter by name..."
                value={search}
                onChange={e => setSearchValue(e.target.value)}
            />
       </SearchStyled>
    );
}

export default Search;