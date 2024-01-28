function AchievementTemplate({ achievement }) {
  return (
    <div className="achievement-item">
      <li>
        <p>{achievement.description}</p>
      </li>
    </div>
  );
}

export default AchievementTemplate;
