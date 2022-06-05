import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";

import "./style-button.css";

export const Chip = ({ name, id }) => {
  const [changeValue, setChangeValue] = useState(false);
  const [whenChangeValue, setWhenChangeValue] = useState(false);
  const [chipSort, setChipSort] = useState(-1);

  function handelClickDelete() {
    setChangeValue((prevCount) => !prevCount);
  }

  useEffect(() => {
    setWhenChangeValue((prevCount) => !prevCount);
    setChipSort((prevCount) => prevCount + 1);
  }, [changeValue]);

  return (
    <div>
      <button
        className={!whenChangeValue ? "cta-animation" : "cta-when-click"}
        onClick={handelClickDelete}
        id={id}
      >
        {name}
        <div className={!whenChangeValue ? "hide-delete" : "delete"}>
          <TiDelete className="icon-delete" />
        </div>
      </button>
    </div>
  );
};
