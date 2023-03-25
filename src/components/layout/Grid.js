import "../layout/Grid.css";
function Grid(props) {
  return (
    <div className="grid">
      <div className="grid-item">
        <h2>IP ADDRESS</h2>
        <p>{props.ipAddress}</p>
      </div>
      <div className="grid-item">
        <h2>LOCATION</h2>
        <p>{props.location}</p>
      </div>
      <div className="grid-item">
        <h2>TIMEZONE</h2>
        <p>{props.timezone}</p>
      </div>
      <div className="grid-item">
        <h2>ISP</h2>
        <p>{props.isp}</p>
      </div>
    </div>
  );
}

export default Grid;
