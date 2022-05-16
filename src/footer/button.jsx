import React, { useState } from "react";

import "./style.css";
export const Button = ({ icon, name }) => {
 const [changeBck,setChangeBck]=useState()
  function handelclick() {
    setChangeBck(true)
  }
  console.log(changeBck)
  return (
    <button className={ !changeBck ? "cta":"ctaClick"} onClick={handelclick}>
      <div className="box">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    </button>
  );
};
