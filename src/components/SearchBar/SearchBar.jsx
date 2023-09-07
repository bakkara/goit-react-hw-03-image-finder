import { SearchBarHeader, SearchForm } from "./Searchbar.styled"

export const SearchBar = ({ onSubmit }) => {
    return (
        <SearchBarHeader>
            <SearchForm onSubmit={onSubmit}>
                <button type="submit">
                    <span>Search</span>
                </button>
                <input
                    type="text"
                    name="query"
                /* autocomplete="off"
                autofocus */
                placeholder="Search images and photos"
                />
            </SearchForm>
       </SearchBarHeader>
    )
} 