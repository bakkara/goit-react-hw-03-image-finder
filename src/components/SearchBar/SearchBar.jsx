import { SearchBarHeader, SearchButton, SearchForm, SearchInput } from "./Searchbar.styled"

export const SearchBar = ({ onSubmit }) => {
    return (
        <SearchBarHeader>
            <SearchForm onSubmit={onSubmit}>
                <SearchButton type="submit">
                    <span>Search</span>
                </SearchButton >
                <SearchInput
                    type="text"
                    name="query"
                placeholder="Search images and photos"
                />
            </SearchForm>
       </SearchBarHeader>
    )
} 