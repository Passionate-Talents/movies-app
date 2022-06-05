import React from "react";

import { getPagesToDisplay } from "../../util/pagination";
import "./pagination.css";

export const Pagination = ({
  countPage,
  marginPagesDisplayed,
  handlePageClick,
  currentPage,
}) => {
  const pagesToDisplay = getPagesToDisplay(
    countPage,
    marginPagesDisplayed,
    currentPage
  );

  return (
    <ul className="pagination">
      {pagesToDisplay.map((page, index) => (
        <li
          key={index}
          onClick={!isNaN(page) ? () => handlePageClick(page) : null}
          className={`page ${currentPage === page ? "page-active " : ""}`}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
