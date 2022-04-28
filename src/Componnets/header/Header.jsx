import React from "react";
import "./Header.css";
import Clapperboard from "../../images/Clapperboard .svg";
import Filmprojector from "../../images/Filmprojector.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Clapperboard} className="Clapperboard" alt="Clapperboard" />
      <h1 className="title">entertainment hub</h1>
      <img src={Filmprojector} className="Filmprojector" alt="Filmprojector" />
    </header>
  );
};

export default Header;
