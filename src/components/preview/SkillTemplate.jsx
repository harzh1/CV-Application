function SkillTemplate({ skill }) {
  return (
    <div className="skill-item">
      <li>
        <b>{skill.skillName}: </b> {skill.description}
      </li>
    </div>
  );
}

export default SkillTemplate;
