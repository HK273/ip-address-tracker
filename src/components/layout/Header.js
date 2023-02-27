import "../layout/Header.css";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
function HeaderSection() {
  return (
    <header>
      <SearchBar />
      <Grid />
    </header>
  );
}
export default HeaderSection;
