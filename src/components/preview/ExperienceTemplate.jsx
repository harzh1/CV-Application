function ExperienceTemplate({ experience }) {
  return (
    <div className="experience-item">
      <div className="education-item-school">
        <div>
          <h2>
            {experience.companyName}-{experience.position}
          </h2>
        </div>
        <div>
          <div className="experience-item-description">
            <p>{experience.location ? experience.location : "Location"}</p>
          </div>
        </div>
      </div>
      <div className="education-item-degree">
        <p className="p-left">
          {experience.description
            ? experience.description
            : "Job overview description "}
        </p>
        <h4 className="resume-period">
          {experience.start || experience.end
            ? experience.start + " - " + experience.end
            : "Start - End"}
        </h4>
      </div>
    </div>
  );
}

export default ExperienceTemplate;
