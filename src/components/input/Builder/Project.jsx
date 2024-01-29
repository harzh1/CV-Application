import { useState, Fragment } from "react";
import ProjectItem from "./ProjectItem";
import AddButton from "./AddButton";

function Project({
  addProjectResume,
  deleteProjectResume,
  changeProjectResume,
}) {
  const [projectList, setProjectList] = useState([]);

  function handleAddProject() {
    const idKey = crypto.randomUUID();
    setProjectList([...projectList, idKey]);
    addProjectResume(idKey);
  }

  function handleDeleteProject(id) {
    setProjectList(projectList.filter((idItem) => idItem != id));
    deleteProjectResume(id);
  }

  return (
    <Fragment>
      {projectList.map((item) => (
        <ProjectItem
          key={item}
          idKey={item}
          handleDelete={handleDeleteProject}
          handleChangeResume={changeProjectResume}
        />
      ))}
      <AddButton label="Add Project" handleClick={handleAddProject}></AddButton>
    </Fragment>
  );
}

export default Project;
