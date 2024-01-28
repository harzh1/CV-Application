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

        <div className="resume-section skill">
          {skills.length > 0 && (
            <Fragment>
              <h2>SKILLS</h2>
              <div className="skills">
                {skills.map((item) => (
                  <SkillTemplate key={item.id} skill={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>

        <div className="resume-section achievement">
          {achievements.length > 0 && (
            <Fragment>
              <h2>ACHIEVEMENTS</h2>
              <div className="achievements">
                {achievements.map((item) => (
                  <AchievementTemplate key={item.id} achievement={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>

        <div className="resume-section POR">
          {PORs.length > 0 && (
            <Fragment>
              <h2>POSITION OF RESPONSIBILITY</h2>
              <div className="PORs">
                {PORs.map((item) => (
                  <PORTemplate key={item.id} POR={item} />
                ))}
              </div>
            </Fragment>
          )}
        </div>

        <div className="resume-section extracurricular">
          {extracurriculars.length > 0 && (
            <Fragment>
              <h2>EXTRACURRICULARS</h2>
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
