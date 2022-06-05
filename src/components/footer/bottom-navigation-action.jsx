import React, { useEffect, useState } from "react";

import "./style.css";

export const BottomNavigationAction = ({ icon, name }) => {
  const [rippleBackgroundStyle, setRippleBackgroundStyle] = useState();
  const [changeValue, setChangeValue] = useState();

  function handelClick() {
    setChangeValue(true);
  }

  useEffect(() => {
    setRippleBackgroundStyle(true);
  }, [changeValue]);

  return (
    <button
      className={!rippleBackgroundStyle ? "cta-ripple" : "cta-click"}
      onClick={handelClick}
    >
      <div className="box">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    </button>
  );
};
