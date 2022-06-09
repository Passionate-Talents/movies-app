import { TiDelete } from "react-icons/ti";

import "./styles.css";

export const Chip = ({
  name,
  id,
  classButton,
  classIcon,
  handelClickChip,
  handleDelete,
}) => {
  return (
    <div>
      <button className={classButton} onClick={handelClickChip} id={id}>
        {name}
        <div>
          <TiDelete className={classIcon} onClick={handleDelete} />
        </div>
      </button>
    </div>
  );
};
