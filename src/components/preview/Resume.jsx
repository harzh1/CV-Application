import React from "react";
import { Fragment } from "react";
import EducationTemplate from "./EducationTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import ProjectTemplate from "./ProjectTemplate";

function Resume({
  firstName,
  lastName,
  additionalInfo,
  experiences,
  educations,
  projects,
}) {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{additionalInfo.address}</p>
        <div>
          <p>{additionalInfo.phone}</p>
          <p>{additionalInfo.email}</p>
        </div>
      </div>
      <div className="cv-body">
        <div className="resume-section education">
          {educations.length > 0 && (
            <Fragment>
              <h2>EDUCATION</h2>
              <div className="educations">
                {educations.map((item) => (
                  <EducationTemplate key={item.id} education={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>

        <div className="resume-section experience">
          {experiences.length > 0 && (
            <Fragment>
              <h2>WORK EXPERIENCES</h2>
              <div className="experiences">
                {experiences.map((item) => (
                  <ExperienceTemplate key={item.id} experience={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>

        <div className="resume-section project">
          {projects.length > 0 && (
            <Fragment>
              <h2>PROJECTS</h2>
              <div className="projects">
                {projects.map((item) => (
                  <ProjectTemplate key={item.id} project={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
