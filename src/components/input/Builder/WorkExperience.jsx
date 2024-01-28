import { Fragment, useState } from "react";
import AddButton from "./AddButton";
import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience({
  addWorkExperienceResume,
  deleteWorkExperienceResume,
  changeWorkExperienceResume,
}) {
  const [workExperienceList, setWorkExperienceList] = useState([]);

  function handleAddWorkExperience() {
    const idKey = crypto.randomUUID();
    setWorkExperienceList([...workExperienceList, idKey]);
    addWorkExperienceResume(idKey);
  }

  function handleDeleteWorkExperience(id) {
    setWorkExperienceList(workExperienceList.filter((idItem) => idItem != id));
    deleteWorkExperienceResume(id);
  }

  return (
    <Fragment>
      {workExperienceList.map((item) => {
        return (
          <WorkExperienceItem
            key={item}
            idKey={item}
            handleDelete={handleDeleteWorkExperience}
            handleChangeResume={changeWorkExperienceResume}
          />
        );
      })}
      <div>
        <AddButton
          label="Add Work Experience"
          handleClick={handleAddWorkExperience}
        ></AddButton>
      </div>
    </Fragment>
  );
}

export default WorkExperience;
