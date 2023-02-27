import "../layout/SearchBar.css";

function SearchBar() {
  return (
    <div className="search">
      <form>
        <input // set input style based on state
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="search-btn" type="submit">
          Shorten it!
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
