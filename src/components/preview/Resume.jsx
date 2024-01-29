import "/src/resumeStyles.css";

import React from "react";
import { Fragment } from "react";
import EducationTemplate from "./EducationTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import ProjectTemplate from "./ProjectTemplate";
import SkillTemplate from "./SkillTemplate";
import AchievementTemplate from "./AchievementTemplate";
import PORTemplate from "./PORTemplate";
import ExtracurricularTemplate from "./ExtracurricularTemplate";

function Resume({
  firstName,
  lastName,
  additionalInfo,
  experiences,
  educations,
  projects,
  skills,
  achievements,
  PORs,
  extracurriculars,
}) {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{additionalInfo.address}</p>
        <div>
          <p>
            {additionalInfo.phone}{" "}
            {additionalInfo.phone && additionalInfo.email ? " | " : ""}{" "}
            {additionalInfo.email}{" "}
            {additionalInfo.email && additionalInfo.linkedIn ? " | " : ""}{" "}
            &nbsp;
            <a href={additionalInfo.linkedIn}>
              {additionalInfo.linkedIn ? "LinkedIn" : ""}{" "}
              {additionalInfo.linkedIn && additionalInfo.github ? " | " : ""}{" "}
              &nbsp;
            </a>
            <a href={additionalInfo.github}>
              {additionalInfo.github ? "Github" : ""}
            </a>
          </p>
        </div>
      </div>

      <div className="cv-body">
        <div className="resume-section education">
          {educations.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">EDUCATION</h2>
              <hr />
              <div className="educations">
                {educations.map((item) => (
                  <EducationTemplate key={item.id} education={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
        <div className="divider"></div>

        <div className="resume-section experience">
          {experiences.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">WORK EXPERIENCES</h2>
              <hr />
              <div className="experiences">
                {experiences.map((item) => (
                  <ExperienceTemplate key={item.id} experience={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
        <div className="divider"></div>

        <div className="resume-section project">
          {projects.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">PROJECTS</h2>
              <hr />
              <div className="projects">
                {projects.map((item) => (
                  <ProjectTemplate key={item.id} project={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
        <div className="divider"></div>

        <div className="resume-section skill">
          {skills.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">SKILLS</h2>
              <hr />
              <div className="skills">
                {skills.map((item) => (
                  <SkillTemplate key={item.id} skill={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
        <div className="divider"></div>

        <div className="resume-section achievement">
          {achievements.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">ACHIEVEMENTS</h2>
              <hr />
              <div className="achievements">
                {achievements.map((item) => (
                  <AchievementTemplate key={item.id} achievement={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
        <div className="divider"></div>

        <div className="resume-section POR">
          {PORs.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">POSITION OF RESPONSIBILITY</h2>
              <hr />
              <div className="PORs">
                {PORs.map((item) => (
                  <PORTemplate key={item.id} POR={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>
        <div className="divider"></div>

        <div className="resume-section extracurricular">
          {extracurriculars.length > 0 && (
            <Fragment>
              <h2 className="resume-heading">EXTRACURRICULARS</h2>
              <hr />
              <div className="extracurriculars">
                {extracurriculars.map((item) => (
                  <ExtracurricularTemplate
                    key={item.id}
                    extracurricular={item}
                  />
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
