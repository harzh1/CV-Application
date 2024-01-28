import { useState } from "react";
import Description from "../Form/Description";
import DeleteButton from "./DeleteButton";

function PORItem({ idKey, handleDelete, handleChangeResume }) {
  const [POR, setPOR] = useState({
    id: idKey,
    description: "",
  });

  function handlePORChange(event) {
    const newPOR = {
      ...POR,
      [event.target.name]: event.target.value,
    };
    setPOR(newPOR);
    handleChangeResume(newPOR);
  }
  return (
    <div className="POR">
      <Description handleChange={handlePORChange} />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default PORItem;
