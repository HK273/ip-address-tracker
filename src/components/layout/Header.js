import "../layout/Header.css";
import SearchBar from "./SearchBar";
// import Grid from "./Grid";

function HeaderSection() {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <SearchBar />
    </header>
  );
}
export default HeaderSection;
