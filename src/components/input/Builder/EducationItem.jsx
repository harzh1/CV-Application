import { useState } from "react";
import InputField from "../Form/InputField";
import Period from "../Form/Period";
import { PlaceholderValues } from "../Form/PlaceholderValues";
import DeleteButton from "./DeleteButton";

function EducationItem({ idKey, handleDelete, handleUpdateResume }) {
  const [education, setEducation] = useState({
    id: idKey,
    schoolName: "",
    degree: "",
    start: "",
    end: "",
    location: "",
  });

  function handleEducationChange(event) {
    if (event.target.name == "school") {
      setEducation({ ...education, schoolName: event.target.value });
    }
    if (event.target.name == "location") {
      setEducation({ ...education, location: event.target.value });
    }
    if (event.target.name == "degree") {
      setEducation({ ...education, degree: event.target.value });
    }
    if (event.target.name == "start") {
      setEducation({ ...education, start: event.target.value });
    }
    if ((event.target.name = "end")) {
      setEducation({ ...education, end: event.target.value });
    }
  }

  return (
    <div className="education">
      <div>
        <h1>Education</h1>
      </div>
      <InputField
        name="school"
        label="School/University"
        handleChange={handleEducationChange}
      />
      <InputField
        name="location"
        label="Location"
        handleChange={handleEducationChange}
      />
      <InputField
        name="degree"
        label="Degree"
        handleChange={handleEducationChange}
      />
      <InputField
        name="grade"
        label="Grade"
        handleChange={handleEducationChange}
      />
      <Period handleChange={handleEducationChange} />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default EducationItem;
