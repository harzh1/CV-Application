import { Fragment, useState } from "react";
import ExtracurricularItem from "./ExtracurricularItem";
import AddButton from "./AddButton";

function Extracurricular({
  addExtracurricularResume,
  deleteExtracurricularResume,
  changeExtracurricularResume,
}) {
  const [extracurricularList, setExtracurricularList] = useState([]);

  function handleAddExtracurricular() {
    const idKey = crypto.randomUUID();
    setExtracurricularList([...extracurricularList, idKey]);
    addExtracurricularResume(idKey);
  }

  function handleDeleteExtracurricular(id) {
    setExtracurricularList(
      extracurricularList.filter((idItem) => idItem != id)
    );
    deleteExtracurricularResume(id);
  }

  return (
    <Fragment>
      {extracurricularList.map((item) => {
        return (
          <ExtracurricularItem
            key={item}
            idKey={item}
            handleDelete={handleDeleteExtracurricular}
            handleChangeResume={changeExtracurricularResume}
          />
        );
      })}
      <AddButton
        label="Add Extracurricular"
        handleClick={handleAddExtracurricular}
      />
    </Fragment>
  );
}

export default Extracurricular;
