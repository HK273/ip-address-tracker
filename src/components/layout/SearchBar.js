import "../layout/SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const api = "https://geo.ipify.org/api/v2/country,city?";
  const apiKey = "at_gtxE4ztYdEzHBWpvl9jZHin1qdaBW";
  const [ipAddress, setipAddress] = useState("8.8.8.8");

  function handleIP(event) {
    const input = event.target.value;
    setipAddress(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch(api + "apiKey=" + apiKey + "&ipAddress=" + ipAddress)
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data below");
        console.log(data);
      });
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleIP} // set input style based on state
          type="text"
          placeholder="Search for an IP..."
        />
        <button className="search-btn" type="submit">
          Shorten it!
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
