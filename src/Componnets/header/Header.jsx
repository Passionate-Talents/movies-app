import React from "react";
import "./Header.css";
import Clapperboard from "../../images/Clapperboard .svg";
import Filmprojector from "../../images/Filmprojector.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={Clapperboard} className="clapperboard" alt="Clapperboard" />
      <h1 className="title">entertainment hub</h1>
      <img src={Filmprojector} className="filmprojector" alt="Filmprojector" />
    </header>
  );
};
