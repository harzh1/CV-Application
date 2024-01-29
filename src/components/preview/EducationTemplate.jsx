function EducationTemplate({ education }) {
  return (
    <div className="education-item">
      <div className="education-item-school">
        <div>
          <h2>{education.schoolName}</h2>
        </div>
        <div>
          <p>{education.location ? education.location : "Location"}</p>
        </div>
      </div>
      <div className="education-item-degree">
        <h2>{education.degree}</h2>
        <h4 className="resume-period">
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
