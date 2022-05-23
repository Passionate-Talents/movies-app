import React, { useEffect, useState } from "react";
import "./style.css";

export const ButtomNavigationAction = ({ icon, name }) => {
  const [rippleBackgroundStyle, setRippleBackgroundStyle] = useState();
  const [changeValue, setchangeValue] = useState();

  function handelclick() {
    setchangeValue(true);
  }

  useEffect(() => {
    setRippleBackgroundStyle(true);
  }, [changeValue]);

  return (
    <button className={!rippleBackgroundStyle ? "cta-ripple" : "cta-click"} onClick={handelclick}>
      <div className="box">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    </button>
  );
};
