import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Resume from "./components/preview/Resume";
import Section from "./components/Section";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
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

  return (
    <>
      <Header />
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
        </div>
        <div className="main-app-rightSide">
          <Resume
            firstName={firstName}
            lastName={lastName}
            additionalInfo={additionalInfo}
            experiences={experiences}
            educations={education}
            projects={projects}
          />
        </div>
      </div>
    </>
  );
}

export default App;
