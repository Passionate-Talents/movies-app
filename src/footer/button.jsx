import React from "react";
import "./style.css";
export const Button = ({ icon , name }) => {
  return (
    <button className="cta">
      <div className="box">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    </button>
  );
};
