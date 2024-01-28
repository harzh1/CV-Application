import { useState } from "react";
import InputField from "../Form/InputField";
import DeleteButton from "./DeleteButton";

function ExtracurricularItem({ idKey, handleDelete, handleChangeResume }) {
  const [extracurricular, setExtracurricular] = useState({
    id: idKey,
    extracurricularName: "",
    description: "",
  });

  function handleExtracurricularChange(event) {
    const newExtracurricular = {
      ...extracurricular,
      [event.target.name]: event.target.value,
    };
    setExtracurricular(newExtracurricular);
    handleChangeResume(newExtracurricular);
  }
  return (
    <div className="extracurricular">
      <InputField
        name="extracurricularName"
        label="Extracurricular Name"
        handleChange={handleExtracurricularChange}
      />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default ExtracurricularItem;
