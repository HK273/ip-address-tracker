import "../layout/SearchBar.css";
import { useState } from "react";
import Grid from "./Grid";

function SearchBar(props) {
  const api = "https://geo.ipify.org/api/v2/country,city?";
  const apiKey = "at_gtxE4ztYdEzHBWpvl9jZHin1qdaBW";
  const [ipAddress, setipAddress] = useState();
  const [ipData, setipData] = useState([props]);
  const [errorHTML, seterrorHTML] = useState(null);

  function handleIP(event) {
    const input = event.target.value;
    setipAddress(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipAddress || !ipRegex.test(ipAddress)) {
      seterrorHTML(<h1>Please enter valid IP Address</h1>);
      return;
    }
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
        seterrorHTML(null);
      });
  }

  return (
    <div className="main-wrap">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleIP}
            type="text"
            placeholder="Search for an IP..."
          />
          <button className="search-btn" type="submit">
            Search!
          </button>
        </form>
      </div>
      {ipData.map((locationData, index) => (
        <Grid key={index} location={locationData.postalCode}></Grid>
      ))}
      {errorHTML}
    </div>
  );
}

export default SearchBar;
