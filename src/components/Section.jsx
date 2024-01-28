import Education from "./input/Builder/Education";
import PersonalDetails from "./input/Builder/PersonalDetails";
import Project from "./input/Builder/Project";
import WorkExperience from "./input/Builder/WorkExperience";

function Section({ title, handleAdd, handleDelete, handleChange, handleName }) {
  return (
    <div className="section">
      <h2>{title}</h2>

      <div className="section-form">
        {title == "Your Details" && (
          <PersonalDetails handleChange={handleName} />
        )}
        {title == "Your Education" && (
          <Education
            addEducationResume={handleAdd}
            deleteEducationResume={handleDelete}
            changeEducationResume={handleChange}
          />
        )}
        {title == "Your Experience" && (
          <WorkExperience
            addWorkExperienceResume={handleAdd}
            deleteWorkExperienceResume={handleDelete}
            changeWorkExperienceResume={handleChange}
          />
        )}
        {title == "Your Projects" && (
          <Project
            addProjectResume={handleAdd}
            deleteProjectResume={handleDelete}
            changeProjectResume={handleChange}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
