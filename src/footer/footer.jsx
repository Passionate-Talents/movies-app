import React from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMovie } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { MdLocalFireDepartment } from "react-icons/md";
import { Button } from "./button";

export const Footer = () => {
  return (
    <div className="footer">
      <Button name="Trending" icon={<MdLocalFireDepartment fontSize={20} />}/>
      <Button name="Movies" icon={<MdOutlineMovie fontSize={20} />} />
      <Button name="TV Series" icon={<CgScreen fontSize={20} />} />
      <Button name="FiSearch" icon={<FiSearch fontSize={20} />} />
    </div>
  );
};
