import React from "react";

import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 onClick={()=>window.scroll(0,0)} className="title">🎬 Entertainment Hub 🎥</h1>
    </header>
  );
};
