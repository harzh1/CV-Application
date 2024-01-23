import { Fragment, useState } from "react";
import EducationItem from "./EducationItem";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";

function Education({
  addEducationResume,
  deleteEducationResume,
  updateEducationResume,
}) {
  const [educationList, setEducationList] = useState([]);

  function handleAddEducation() {
    const idKey = crypto.randomUUID();
    setEducationList([...educationList, idKey]);
    // addEducationResume(idKey);
  }

  function handleDeleteEducation(id) {
    setEducationList(educationList.filter((idItem) => idItem != id));
  }

  return (
    <Fragment>
      {educationList.map((item) => {
        return (
          <EducationItem
            key={item}
            idKey={item}
            handleDelete={handleDeleteEducation}
            handleUpdate={updateEducationResume}
          />
        );
      })}
      <div>
        <AddButton
          label="Add Education"
          handleClick={handleAddEducation}
        ></AddButton>
      </div>
    </Fragment>
  );
}

export default Education;
