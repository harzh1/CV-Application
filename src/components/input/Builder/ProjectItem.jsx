import React, { useState } from "react";
import InputField from "../Form/InputField";
import DeleteButton from "./DeleteButton";
import Description from "../Form/Description";
import Link from "../Form/Link";

function ProjectItem({ idKey, handleDelete, handleChangeResume }) {
  const [project, setProject] = useState({
    id: idKey,
    projectName: "",
    description: "",
    github: "",
  });

  function handleProjectChange(event) {
    const newProject = {
      ...project,
      [event.target.name]: event.target.value,
    };
    setProject(newProject);
    handleChangeResume(newProject);
  }

  return (
    <div className="project">
      <InputField
        name="projectName"
        label="Project Name"
        handleChange={handleProjectChange}
      />
      <Description handleChange={handleProjectChange} />
      <Link name="github" label="Github" handleChange={handleProjectChange} />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default ProjectItem;
