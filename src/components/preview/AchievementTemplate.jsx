function AchievementTemplate({ achievement }) {
  return (
    <div className="achievement-item">
      <li>{achievement.description}</li>
    </div>
  );
}

export default AchievementTemplate;
