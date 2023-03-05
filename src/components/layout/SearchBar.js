import "../layout/SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const api = "https://geo.ipify.org/api/v2/country,city?";
  const apiKey = "at_gtxE4ztYdEzHBWpvl9jZHin1qdaBW";
  const [ipAddress, setipAddress] = useState("8.8.8.8");
  const [ipData, setipData] = useState([]);

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
        setipData([
          {
            city: data.location.city,
            country: data.location.country,
            geonameId: data.location.geonameId,
            lat: data.location.lat,
            lng: data.location.lng,
            postalCode: data.location.postalCode,
            region: data.location.region,
            timezone: data.location.timezone,
          },
        ]);
        console.log(ipData);
      });
  }

  return (
    <div className="main-wrap">
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
      {ipData.map((locationData, index) => (
        <div className="short-link" key={index}>
          <div>
            <h1 className="p-link">{locationData.country}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
