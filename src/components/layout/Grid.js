import "../layout/Grid.css";
function Grid(props) {
  return (
    <div className="grid">
      <div className="grid-item">
        <h1>IP ADDRESS</h1>
        <p>{props.ipaddress}</p>
      </div>
      <div className="grid-item">
        <h1>LOCATION</h1>
        <p>{props.location}</p>
      </div>
      <div className="grid-item">
        <h1>TIMEZONE</h1>
        <p>{props.timezone}</p>
      </div>
      <div className="grid-item">
        <h1>ISP</h1>
        <p>{props.isp}</p>
      </div>
    </div>
  );
}

export default Grid;
