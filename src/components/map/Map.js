import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../map/Map.css";
// center={[lat,long]}
// Just give a default value for this to begin on ip.8.8.8.8
// https://www.latlong.net/
function MapComponent(props) {
  return (
    <MapContainer
      center={[37.38605, -122.08385]}
      zoom={40}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapComponent;
