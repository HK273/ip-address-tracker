import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../map/Map.css";
// center={[long,lat]}
// https://www.latlong.net/
function MapComponent() {
  return (
    <MapContainer
      center={[51.38101, 0.10061]}
      zoom={12}
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
