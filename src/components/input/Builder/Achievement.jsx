import { Fragment, useState } from "react";
import AchievementItem from "./AchievementItem";
import AddButton from "./AddButton";

function Achievement({
  addAchievementResume,
  deleteAchievementResume,
  changeAchievementResume,
}) {
  const [achievementList, setAchievementList] = useState([]);

  function handleAddAchievement() {
    const idKey = crypto.randomUUID();
    setAchievementList([...achievementList, idKey]);
    addAchievementResume(idKey);
  }

  function handleDeleteAchievement(id) {
    setAchievementList(achievementList.filter((idItem) => idItem != id));
    deleteAchievementResume(id);
  }

  return (
    <Fragment>
      {achievementList.map((item) => {
        return (
          <AchievementItem
            key={item}
            idKey={item}
            handleDelete={handleDeleteAchievement}
            handleChangeResume={changeAchievementResume}
          />
        );
      })}
      <AddButton label="Add Achievement" handleClick={handleAddAchievement} />
    </Fragment>
  );
}

export default Achievement;
