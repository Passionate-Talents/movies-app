import React, { useEffect, useState } from "react";
import "./styleButton.css";
import { TiDelete } from "react-icons/ti";

export const Button = () => {
    const [changeBack, setChangeBack] = useState();
    const [check, setCheck] = useState(false);
    function handelClickDelete() {
        setChangeBack(prevCount => !prevCount )
    }
    useEffect(() => {
        setCheck(prevCount => !prevCount )
    }, [changeBack]);
  return (
    <div>
      <button className={!check ? "cta" : "cta-when-click"} onClick={handelClickDelete}>name <div className={!check ? "hide-delete":"delete" }><TiDelete color="rgb(201, 203, 203)" size="20px"/></div></button>
    </div>
  );
};
