export const SearchBar = ({onSubmit}) => {
    return (
        <header>
            <form onSubmit={(evt)=> onSubmit(evt)}>
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
            </form>
        </header>
    )
} 