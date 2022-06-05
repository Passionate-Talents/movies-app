import { FiSearch } from "react-icons/fi";
import { MdOutlineMovie } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { MdLocalFireDepartment } from "react-icons/md";

import { ButtomNavigationAction } from "./buttom-navigation-action";
import { Link } from "react-router-dom";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/movies-app">
        <ButtomNavigationAction
          name="Trending"
          icon={<MdLocalFireDepartment fontSize={20} />}
        />
      </Link>
      <Link to="/movies">
        <ButtomNavigationAction
          name="Movies"
          icon={<MdOutlineMovie fontSize={20} />}
        />
      </Link>
      <Link to="series">
        <ButtomNavigationAction
          name="TV Series"
          icon={<CgScreen fontSize={20} />}
        />
      </Link>
      <Link to="search">
        <ButtomNavigationAction
          name="Search"
          icon={<FiSearch fontSize={20} />}
        />
      </Link>
    </div>
  );
};
