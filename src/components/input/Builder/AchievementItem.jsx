import { useState } from "react";
import Description from "../Form/Description";
import DeleteButton from "./DeleteButton";

function AchievementItem({ idKey, handleDelete, handleChangeResume }) {
  const [achievement, setAchievement] = useState({
    id: idKey,
    description: "",
  });

  function handleAchievementChange(event) {
    const newAchievement = {
      ...achievement,
      [event.target.name]: event.target.value,
    };
    setAchievement(newAchievement);
    handleChangeResume(newAchievement);
  }
  return (
    <div className="achievement">
      <Description handleChange={handleAchievementChange} />
      <DeleteButton label="Delete" handleClick={() => handleDelete(idKey)} />
    </div>
  );
}

export default AchievementItem;
