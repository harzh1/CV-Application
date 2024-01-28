function ExtracurricularTemplate({ extracurricular }) {
  return (
    <div className="extracurricular-item">
      <li>
        <p>{extracurricular.extracurricularName}</p>
      </li>
    </div>
  );
}

export default ExtracurricularTemplate;
