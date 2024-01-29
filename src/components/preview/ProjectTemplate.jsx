function ProjectTemplate({ project }) {
  return (
    <div className="project-item">
      <div>
        <h2>{project.projectName}</h2>
      </div>
      <div>
        <div className="project-item-description">
          <p>{project.description ? project.description : "Description"}</p>
        </div>
      </div>

      <div>
        <p>
          Link:{" "}
          <a href={project.github} target="_blank">
            {project.projectName}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectTemplate;
