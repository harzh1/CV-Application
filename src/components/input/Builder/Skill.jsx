import { Fragment, useState } from "react";
import SkillItem from "./SkillItem";
import AddButton from "./AddButton";

function Skill({ addSkillResume, deleteSkillResume, changeSkillResume }) {
  const [skillList, setSkillList] = useState([]);

  function handleAddSkill() {
    const idKey = crypto.randomUUID();
    setSkillList([...skillList, idKey]);
    addSkillResume(idKey);
  }

  function handleDeleteSkill(id) {
    setSkillList(skillList.filter((idItem) => idItem != id));
    deleteSkillResume(id);
  }

  return (
    <Fragment>
      {skillList.map((item) => {
        return (
          <SkillItem
            key={item}
            idKey={item}
            handleDelete={handleDeleteSkill}
            handleChangeResume={changeSkillResume}
          />
        );
      })}
      <AddButton label="Add Skill" handleClick={handleAddSkill} />
    </Fragment>
  );
}

export default Skill;
