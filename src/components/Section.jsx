import Achievement from "./input/Builder/Achievement";
import Education from "./input/Builder/Education";
import Extracurricular from "./input/Builder/Extracurricular";
import POR from "./input/Builder/POR";
import PersonalDetails from "./input/Builder/PersonalDetails";
import Project from "./input/Builder/Project";
import Skill from "./input/Builder/Skill";
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
        {title == "Your Skills" && (
          <Skill
            addSkillResume={handleAdd}
            deleteSkillResume={handleDelete}
            changeSkillResume={handleChange}
          />
        )}
        {title == "Your Achievements" && (
          <Achievement
            addAchievementResume={handleAdd}
            deleteAchievementResume={handleDelete}
            changeAchievementResume={handleChange}
          />
        )}
        {title == "Position of Responsibilities" && (
          <POR
            addPORResume={handleAdd}
            deletePORResume={handleDelete}
            changePORResume={handleChange}
          />
        )}
        {title == "Extracurricular Activities" && (
          <Extracurricular
            addExtracurricularResume={handleAdd}
            deleteExtracurricularResume={handleDelete}
            changeExtracurricularResume={handleChange}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
