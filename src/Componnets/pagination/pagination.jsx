import React from "react";
import "./pagination.css";

export const Pagination = ({
  countPage,
  marginPagesDisplayed,
  handlePageClick,
  currentPage,
}) => {
  const pagesList = [...Array(countPage + 1).keys()].slice(1);

  const pagesTodisplay = pagesList
    .filter((page) => {
      if (page === 1 || page === pagesList.length) return true;
      if (
        page >= currentPage - 1 &&
        page < currentPage + marginPagesDisplayed
      ) {
        return true;
      }
      return false;
    })
    .reduce((pages, page, index, pagesList) => {
      if (index === 1 && page - 1 !== 1) {
        pages.push("...");
      }

      pages.push(page);

      if (index === pagesList.length - 2 && page + 1 !== countPage) {
        pages.push("...");
      }
      return pages;
    }, []);

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
