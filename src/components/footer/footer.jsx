import { FiSearch } from "react-icons/fi";
import { MdOutlineMovie } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { MdLocalFireDepartment } from "react-icons/md";

import { BottomNavigationAction } from "./bottom-navigation-action";
import { Link } from "react-router-dom";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/movies-app">
        <BottomNavigationAction
          name="Trending"
          icon={<MdLocalFireDepartment fontSize={20} />}
        />
      </Link>
      <Link to="/movies">
        <BottomNavigationAction
          name="Movies"
          icon={<MdOutlineMovie fontSize={20} />}
        />
      </Link>
      <Link to="series">
        <BottomNavigationAction
          name="TV Series"
          icon={<CgScreen fontSize={20} />}
        />
      </Link>
      <Link to="search">
        <BottomNavigationAction
          name="Search"
          icon={<FiSearch fontSize={20} />}
        />
      </Link>
    </div>
  );
};
