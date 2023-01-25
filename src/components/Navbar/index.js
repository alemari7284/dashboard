import { Tray } from "./Tray/Tray";
import { SearchBar } from "./NavTools/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="dashTitle">
        <div>Dashboard</div>
        <div
          style={{ color: "grey", fontSize: "0.8rem", fontWeight: "lighter" }}
        >
          17 January, 2022
          <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faChevronDown} />
        </div>
      </div>
      <SearchBar></SearchBar>
      <Tray></Tray>
    </div>
  );
};

export default Navbar;
