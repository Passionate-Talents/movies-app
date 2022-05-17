import "./style.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMovie } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { MdLocalFireDepartment } from "react-icons/md";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <Button
          name="Trending"
          icon={<MdLocalFireDepartment fontSize={20} />}
        />
      </Link>
      <Link to="/movies">
        <Button name="Movies" icon={<MdOutlineMovie fontSize={20} />} />
      </Link>
      <Link to="">
        <Button name="TV Series" icon={<CgScreen fontSize={20} />} />
      </Link>
      <Link to="">
        <Button name="Search" icon={<FiSearch fontSize={20} />} />
      </Link>
    </div>
  );
};
