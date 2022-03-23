import React, { useState } from "react";

const UpdateText = (props) => {
  const [updateInputData, setUpdatedInputData] = useState("");
  const editInputData = (e) => {
    setUpdatedInputData(e.target.value);
  };
  const applyText = () => {
    props.changedText(updateInputData);
    props.setFlag(false);
  };
  return (
    <>
      {console.log(props.edit)}
      <div className={props.flag ? "" : "applyText"}>
        <div>
          <input
            type="text"
            value={updateInputData}
            onChange={editInputData}
            placeholder="Edit text here"
          />
        </div>
        <div>
          <button onClick={applyText}>Apply</button>
        </div>
      </div>
    </>
  );
};

export default UpdateText;
