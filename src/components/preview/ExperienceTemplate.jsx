function ExperienceTemplate({ experience }) {
  return (
    <div className="experience-item">
      <div>
        <h1>{experience.companyName}</h1>
      </div>
      <div>
        <div className="experience-item-description">
          <p>{experience.location ? experience.location : "Location"}</p>
        </div>
      </div>
      <div>
        <h2>{experience.position}</h2>
        <h4>
          {experience.start || experience.end
            ? experience.start + " - " + experience.end
            : "Start - End"}
        </h4>
      </div>
      <div>
        <p>
          {experience.description
            ? experience.description
            : "Job overview description "}
        </p>
      </div>
    </div>
  );
}

export default ExperienceTemplate;
