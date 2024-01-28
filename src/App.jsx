import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Resume from "./components/preview/Resume";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [PORs, setPORs] = useState([]);
  const [extracurriculars, setExtracurriculars] = useState([]);

  const [additionalInfo, setAdditionalInfo] = useState({
    email: "",
    address: "",
    phone: "",
  });

  function handleNameUpdate(event) {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "emailAddress":
        setAdditionalInfo({ ...additionalInfo, email: event.target.value });
        break;
      case "phone":
        setAdditionalInfo({ ...additionalInfo, phone: event.target.value });
        break;
      case "address":
        setAdditionalInfo({ ...additionalInfo, address: event.target.value });
    }
  }

  function addEducationResume(id) {
    setEducation([
      ...education,
      {
        id: id,
        schoolName: "",
        degree: "",
        start: "",
        end: "",
        grade: "",
        location: "",
      },
    ]);
  }

  function deleteEducationResume(id) {
    setEducation(education.filter((education) => education.id != id));
  }

  function handleEducationChange(newEducation) {
    const updatedEducation = education.map((item) => {
      if (item.id === newEducation.id) {
        return {
          ...item,
          schoolName: newEducation.schoolName,
          degree: newEducation.degree,
          start: newEducation.start,
          end: newEducation.end,
          grade: newEducation.grade,
          location: newEducation.location,
        };
      }
      return item;
    });

    setEducation(updatedEducation);
  }

  function addExperienceResume(id) {
    setExperiences([
      ...experiences,
      {
        id: id,
        companyName: "",
        position: "",
        start: "",
        end: "",
        location: "",
        description: "",
      },
    ]);
  }

  function deleteExperienceResume(id) {
    setExperiences(experiences.filter((experience) => experience.id != id));
  }

  function handleExperienceChange(newExperience) {
    const updatedExperiences = experiences.map((item) => {
      if (item.id === newExperience.id) {
        return {
          ...item,
          companyName: newExperience.companyName,
          position: newExperience.position,
          start: newExperience.start,
          end: newExperience.end,
          location: newExperience.location,
          description: newExperience.description,
        };
      }
      return item;
    });

    setExperiences(updatedExperiences);
  }

  function addProjectResume(id) {
    setProjects([
      ...projects,
      {
        id: id,
        projectName: "",
        description: "",
        link: "",
      },
    ]);
  }

  function deleteProjectResume(id) {
    setProjects(projects.filter((project) => project.id != id));
  }

  function handleProjectChange(newProject) {
    const updatedProjects = projects.map((item) => {
      if (item.id === newProject.id) {
        return {
          ...item,
          projectName: newProject.projectName,
          description: newProject.description,
          link: newProject.link,
        };
      }
      return item;
    });

    setProjects(updatedProjects);
  }

  function addSkillResume(id) {
    setSkills([
      ...skills,
      {
        id: id,
        skillName: "",
        description: "",
      },
    ]);
  }

  function deleteSkillResume(id) {
    setSkills(skills.filter((skill) => skill.id != id));
  }

  function handleSkillChange(newSkill) {
    const updatedSkills = skills.map((item) => {
      if (item.id === newSkill.id) {
        return {
          ...item,
          skillName: newSkill.skillName,
          description: newSkill.description,
        };
      }
      return item;
    });

    setSkills(updatedSkills);
  }

  function addAchievementResume(id) {
    setAchievements([
      ...achievements,
      {
        id: id,
        description: "",
      },
    ]);
  }

  function deleteAchievementResume(id) {
    setAchievements(achievements.filter((achievement) => achievement.id != id));
  }

  function handleAchievementChange(newAchievement) {
    const updatedAchievements = achievements.map((item) => {
      if (item.id === newAchievement.id) {
        return {
          ...item,
          description: newAchievement.description,
        };
      }
      return item;
    });

    setAchievements(updatedAchievements);
  }

  function addPORResume(id) {
    setPORs([
      ...PORs,
      {
        id: id,
        description: "",
      },
    ]);
  }

  function deletePORResume(id) {
    setPORs(PORs.filter((POR) => POR.id != id));
  }

  function handlePORChange(newPOR) {
    const updatedPORs = PORs.map((item) => {
      if (item.id === newPOR.id) {
        return {
          ...item,
          description: newPOR.description,
        };
      }
      return item;
    });

    setPORs(updatedPORs);
  }

  function addExtracurricularResume(id) {
    setExtracurriculars([
      ...extracurriculars,
      {
        id: id,
        extracurricularName: "",
      },
    ]);
  }

  function deleteExtracurricularResume(id) {
    setExtracurriculars(
      extracurriculars.filter((extracurricular) => extracurricular.id != id)
    );
  }

  function handleExtracurricularChange(newExtracurricular) {
    const updatedExtracurriculars = extracurriculars.map((item) => {
      if (item.id === newExtracurricular.id) {
        return {
          ...item,
          extracurricularName: newExtracurricular.extracurricularName,
        };
      }
      return item;
    });

    setExtracurriculars(updatedExtracurriculars);
  }

  return (
    <>
      <div className="main-app-header">
        <Header />
      </div>

      <div className="main-app">
        <div className="main-app-leftSide">
          <Section title="Your Details" handleName={handleNameUpdate} />
          <Section
            title="Your Education"
            handleAdd={addEducationResume}
            handleDelete={deleteEducationResume}
            handleChange={handleEducationChange}
          />
          <Section
            title="Your Experience"
            handleAdd={addExperienceResume}
            handleDelete={deleteExperienceResume}
            handleChange={handleExperienceChange}
          />
          <Section
            title="Your Projects"
            handleAdd={addProjectResume}
            handleDelete={deleteProjectResume}
            handleChange={handleProjectChange}
          />
          <Section
            title="Your Skills"
            handleAdd={addSkillResume}
            handleDelete={deleteSkillResume}
            handleChange={handleSkillChange}
          />
          <Section
            title="Your Achievements"
            handleAdd={addAchievementResume}
            handleDelete={deleteAchievementResume}
            handleChange={handleAchievementChange}
          />
          <Section
            title="Position of Responsibilities"
            handleAdd={addPORResume}
            handleDelete={deletePORResume}
            handleChange={handlePORChange}
          />
          <Section
            title="Extracurricular Activities"
            handleAdd={addExtracurricularResume}
            handleDelete={deleteExtracurricularResume}
            handleChange={handleExtracurricularChange}
          />
        </div>
        <div className="main-app-rightSide">
          <div className="main-app-rightSide-resume">
            <Resume
              firstName={firstName}
              lastName={lastName}
              additionalInfo={additionalInfo}
              experiences={experiences}
              educations={education}
              projects={projects}
              skills={skills}
              achievements={achievements}
              PORs={PORs}
              extracurriculars={extracurriculars}
            />
          </div>
        </div>
      </div>
      <div className="main-app-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
