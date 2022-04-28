import React from "react";
import "./style.css";
import { IoSearchOutline } from "react-icons/io";
import { FaHotjar } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { MdOutlineCropLandscape } from "react-icons/md";
export const Footer = () => {
  return (
    <div className="footer">
      <button className="cta">
        <div className="box">
          <span>
            <FaHotjar />
          </span>
          <span>Trending</span>
        </div>
      </button>
      <button className="cta">
        <div className="box">
          <span>
            <MdMovie />
          </span>
          <span>Movies</span>
        </div>
      </button>
      <button className="cta">
        <div className="box">
          <span>
            <MdOutlineCropLandscape />
          </span>
          <span>TV Series</span>
        </div>
      </button>
      <button className="cta">
        <div className="box">
          <span>
            <IoSearchOutline />
          </span>
          <span>Search</span>
        </div>
      </button>
    </div>
  );
};
