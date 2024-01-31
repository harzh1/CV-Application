import { useState } from "react";
import InputField from "../Form/InputField";
import Period from "../Form/Period";
import { PlaceholderValues } from "../Form/PlaceholderValues";
import DeleteButton from "./DeleteButton";

function EducationItem({ idKey, handleDelete, handleChangeResume }) {
  const [education, setEducation] = useState({
    id: idKey,
    schoolName: "",
    degree: "",
    start: "",
    end: "",
    grade: "",
    location: "",
  });

  function handleEducationChange(event) {
    const newEducation = {
      ...education,
      [event.target.name]: event.target.value,
    };
    setEducation(newEducation);
    handleChangeResume(newEducation);
  }

  return (
    <div className="education">
      <InputField
        name="schoolName"
        label="School/University"
        handleChange={handleEducationChange}
      />
      <div className="half-input-div">
        <div className="half-input">
          <InputField
            name="location"
            label="Location"
            handleChange={handleEducationChange}
          />
        </div>
        <div className="half-input">
          <InputField
            name="degree"
            label="Degree"
            handleChange={handleEducationChange}
          />
        </div>
      </div>
      <div className="half-input-div">
        <div className="half-input">
          <InputField
            name="grade"
            label="Grade"
            handleChange={handleEducationChange}
          />
        </div>
        <div className="half-input">
          <Period handleChange={handleEducationChange} />
        </div>
      </div>
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default EducationItem;
