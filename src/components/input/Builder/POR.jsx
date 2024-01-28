import { Fragment, useState } from "react";
import PORItem from "./PORItem";
import AddButton from "./AddButton";

function POR({ addPORResume, deletePORResume, changePORResume }) {
  const [PORList, setPORList] = useState([]);

  function handleAddPOR() {
    const idKey = crypto.randomUUID();
    setPORList([...PORList, idKey]);
    addPORResume(idKey);
  }

  function handleDeletePOR(id) {
    setPORList(PORList.filter((idItem) => idItem != id));
    deletePORResume(id);
  }

  return (
    <Fragment>
      {PORList.map((item) => {
        return (
          <PORItem
            key={item}
            idKey={item}
            handleDelete={handleDeletePOR}
            handleChangeResume={changePORResume}
          />
        );
      })}
      <AddButton label="Add POR" handleClick={handleAddPOR} />
    </Fragment>
  );
}

export default POR;
