import "../layout/SearchBar.css";
import { useState } from "react";
import { useEffect } from "react";
import Grid from "./Grid";
import MapComponent from "../map/Map";
import ArrowIcon from "../images/icon-arrow.svg";

function SearchBar() {
  const api = "https://geo.ipify.org/api/v2/country?";
  const apiTwo = "https://geo.ipify.org/api/v2/country,city?";
  const apiKey = "at_gtxE4ztYdEzHBWpvl9jZHin1qdaBW";
  const [ipAddress, setipAddress] = useState();
  const [ipData, setipData] = useState({
    ip: "8.8.8.8",
    location: "US,California",
    timezone: "-07:00",
    isp: "Google LLC",
  });
  const [locationData, setlocationData] = useState({
    lat: 37.38605,
    lng: -122.08385,
  });
  const [errorHTML, seterrorHTML] = useState(null);

  function handleIP(event) {
    const input = event.target.value;
    setipAddress(input);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipAddress || !ipRegex.test(ipAddress)) {
      seterrorHTML(<h1>Please enter valid IP Address</h1>);
      console.log(errorHTML);
      return;
    }
    const responses = await Promise.all([
      fetch(api + "apiKey=" + apiKey + "&ipAddress=" + ipAddress),
      fetch(apiTwo + "apiKey=" + apiKey + "&ipAddress=" + ipAddress),
    ]);
    const [data, dataTwo] = await Promise.all(
      responses.map((response) => response.json())
    );
    setipData({
      ip: data.ip,
      location: data.location.country + "," + data.location.region,
      timezone: data.location.timezone,
      isp: data.isp,
    });
    setlocationData({
      lat: dataTwo.location.lat,
      lng: dataTwo.location.lng,
    });
    seterrorHTML(null);
  }
  useEffect(() => {
    console.log(ipData);
    console.log(locationData);
  }, [ipData, locationData]);

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
            <img src={ArrowIcon} alt="" />
          </button>
          {errorHTML}
        </form>
      </div>
      <Grid
        ipAddress={ipData.ip}
        location={ipData.location}
        timezone={ipData.timezone}
        isp={ipData.isp}
      ></Grid>
      <MapComponent
        key={locationData.lat}
        lat={locationData.lat}
        lng={locationData.lng}
      />
    </div>
  );
}

export default SearchBar;
