const Search = ({ onSearch, searchTerm }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch} value={searchTerm} />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
};

export default Search;
