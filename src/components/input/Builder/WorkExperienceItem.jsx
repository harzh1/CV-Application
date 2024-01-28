import { useState } from "react";
import InputField from "../Form/InputField";
import Period from "../Form/Period";
import DeleteButton from "./DeleteButton";
import Description from "../Form/Description";

function WorkExperienceItem({ idKey, handleDelete, handleChangeResume }) {
  const [workExperience, setWorkExperience] = useState({
    id: idKey,
    companyName: "",
    position: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  function handleWorkExperienceChange(event) {
    const newWorkExperience = {
      ...workExperience,
      [event.target.name]: event.target.value,
    };
    setWorkExperience(newWorkExperience);
    handleChangeResume(newWorkExperience);
  }

  return (
    <div className="workExperience">
      <InputField
        name="companyName"
        label="Company Name"
        handleChange={handleWorkExperienceChange}
      />
      <InputField
        name="position"
        label="Position"
        handleChange={handleWorkExperienceChange}
      />
      <InputField
        name="location"
        label="Location"
        handleChange={handleWorkExperienceChange}
      />
      <Description handleChange={handleWorkExperienceChange} />

      <Period handleChange={handleWorkExperienceChange} />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default WorkExperienceItem;
