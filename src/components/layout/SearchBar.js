import "../layout/SearchBar.css";
import { useState } from "react";
import Grid from "./Grid";
import MapComponent from "../map/Map";

function SearchBar(props) {
  const api = "https://geo.ipify.org/api/v2/country?";
  const api_two = "https://geo.ipify.org/api/v2/country,city?";
  const apiKey = "at_gtxE4ztYdEzHBWpvl9jZHin1qdaBW";
  const [ipAddress, setipAddress] = useState();
  const [ipData, setipData] = useState([props]);
  const [geoData, setgeoData] = useState([51.38101, 0.10061]);
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
            ipAddress: data.ip,
            location: data.location.country + "," + data.location.region,
            timezone: data.location.timezone,
            isp: data.isp,
          },
        ]);
        console.log(ipData);
        seterrorHTML(null);
      });
    fetch(api_two + "apiKey=" + apiKey + "&ipAddress=" + ipAddress)
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setgeoData([
          {
            city: data.location.city,
            geonameId: data.location.geonameId,
            lat: data.location.lat,
            lng: data.location.lng,
            postalCode: data.location.postalCode,
          },
        ]);
        console.log(geoData);
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
        <Grid
          key={index}
          ipAddress={locationData.ipAddress}
          location={locationData.location}
          timezone={locationData.timezone}
          isp={locationData.isp}
        ></Grid>
      ))}
      {errorHTML}
    </div>
  );
}

export default SearchBar;
