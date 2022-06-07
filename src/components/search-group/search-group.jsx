import React, { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";

import "./search.css";

export const SearchGroup = ({ setSearchValue }) => {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setSearchValue(inputRef.current.value);
  };

  return (
    <div className="search-group">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder=" "
        />
        <label htmlFor="search" className="search-lable">
          Search
        </label>
      </div>
      <div onClick={handleSearchClick} className="search-icon-wrapper">
        <HiSearch className="search-icon" />
      </div>
    </div>
  );
};
