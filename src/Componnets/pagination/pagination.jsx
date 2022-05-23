import React from "react";

import "./pagination.css";
import { getPagesTodisplay } from "../../util/pagination";

export const Pagination = ({
  countPage,
  marginPagesDisplayed,
  handlePageClick,
  currentPage,
}) => {
  const pagesTodisplay = getPagesTodisplay(
    countPage,
    marginPagesDisplayed,
    currentPage
  );

  return (
    <ul className="pagination">
      {pagesTodisplay.map((page, index) => (
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
