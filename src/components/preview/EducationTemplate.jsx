function EducationTemplate({ education }) {
  return (
    <div className="education-item">
      <div>
        <h2>{education.schoolName}</h2>
      </div>
      <div>
        <div className="experience-item-description">
          <p>{education.location ? education.location : "Location"}</p>
        </div>
      </div>
      <div>
        <h2>{education.degree}</h2>
        <h4>
          {education.start || education.end
            ? education.start + " - " + education.end
            : "Start - End"}
        </h4>
      </div>
      <div>
        <h3>
          <li>CGPA - {education.grade}</li>
        </h3>
      </div>
    </div>
  );
}

export default EducationTemplate;
