import React from "react";

import "./style.css";

export const SearchByButton = ({ handleSearchBy, searchBy, lable, value }) => {
  return (
    <button
      onClick={() => handleSearchBy(value)}
      className={`btn ${searchBy === value ? "active" : ""}`}
    >
      {lable}
    </button>
  );
};
