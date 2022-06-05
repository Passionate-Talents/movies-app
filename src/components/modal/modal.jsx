import React from "react";

import "./modal.css";

export const Modal = ({ handleCloseMovieInfo, children }) => {
  return (
    <div onClick={handleCloseMovieInfo} className="modal">
      {children}
    </div>
  );
};
