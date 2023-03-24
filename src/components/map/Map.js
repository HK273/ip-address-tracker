import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../map/Map.css";
// center={[lat,long]}
// Just give a default value for this to begin on ip.8.8.8.8
// https://www.latlong.net/
// const position = [37.38605, -122.08385];
// const lat = 37.38605;
// const long = -122.08385;
function MapComponent({ lat, lng }) {
  return (
    <MapContainer center={[lat, lng]} zoom={40} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}></Marker>
    </MapContainer>
  );
}

export default MapComponent;
