import React, { useState } from "react";
import InputField from "../Form/InputField";
import Description from "../Form/Description";
import DeleteButton from "./DeleteButton";

function SkillItem({ idKey, handleDelete, handleChangeResume }) {
  const [skill, setSkill] = useState({
    id: idKey,
    skillName: "",
    description: "",
  });

  function handleSkillChange(event) {
    const newSkill = {
      ...skill,
      [event.target.name]: event.target.value,
    };
    setSkill(newSkill);
    handleChangeResume(newSkill);
  }
  return (
    <div className="skill">
      <InputField
        name="skillName"
        label="Skill Name"
        handleChange={handleSkillChange}
      />
      <Description handleChange={handleSkillChange} />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default SkillItem;
