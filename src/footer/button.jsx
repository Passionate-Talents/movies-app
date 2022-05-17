import React, { useEffect, useState } from "react";
import "./style.css";

export const Button = ({ icon, name }) => {
  const [changeBack, setChangeBack] = useState();

  const [boolean, setBoolean] = useState();
  function handelclick() {
    setChangeBack(true);
  }
  useEffect(() => {
    setBoolean(true);
  }, [changeBack]);
  return (
    <button className={!boolean ? "cta" : "cta-click"} onClick={handelclick}>
      <div className="box">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    </button>
  );
};
