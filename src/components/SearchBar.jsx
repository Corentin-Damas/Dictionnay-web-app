import { useState } from "react";

function SearchBar({ setSearch }) {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  function handleSearch(event) {
    const searchWord = event.target.value;

    if (event.key === "Enter" && searchWord != "") {
      setError(false);
      setSearch(searchWord);
    }
    if (event.key === "Enter" && searchWord == "") {
      setError(true);
    }
  }

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <div className={`searchBar  ${error ? "searchError" : ""}`}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search ..."
          onChange={handleChange}
          value={searchText}
          onKeyDown={handleSearch}
        />
        <button
          className="searchBtn"
          onClick={(event) => setSearch(event.target.value)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
      </div>
      {error && (
        <span className="errorMessage">
          Opss! this filed should not be empty...
        </span>
      )}
    </>
  );
}

export default SearchBar;
