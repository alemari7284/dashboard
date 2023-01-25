import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon className="magnIcon" icon={faMagnifyingGlass} />
      <input className="styledInput" placeholder="Search or type a command" />
    </div>
  );
};
