import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";

import "./style-button.css";

export const Chip = ({ name }) => {
  const [changeValue, setChangeValue] = useState(false);
  const [whenChangeValue, setWhenChangeValue] = useState(false);

  function handelClickDelete() {
    setChangeValue((prevCount) => !prevCount);
  }

  useEffect(() => {
    setWhenChangeValue((prevCount) => !prevCount);
  }, [changeValue]);

  return (
    <div>
      <button
        className={!whenChangeValue ? "cta-animation" : "cta-when-click"}
        onClick={handelClickDelete}
      >
        {name}
        <div className={!whenChangeValue ? "hide-delete" : "delete"}>
          <TiDelete className="icon-delete" />
        </div>
      </button>
    </div>
  );
};
