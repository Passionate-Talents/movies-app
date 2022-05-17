import React, { useEffect, useState } from "react";
import "./style.css";

export const Button = ({ icon, name }) => {
  const [changeBack, setChangeBack] = useState();
  const [check, setCheck] = useState();
  function handelclick() {
    setChangeBack(true);
  }
  useEffect(() => {
    setCheck(true);
  }, [changeBack]);
  return (
    <button className={!check ? "cta" : "cta-click"} onClick={handelclick}>
      <div className="box">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    </button>
  );
};
