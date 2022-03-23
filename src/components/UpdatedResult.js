import React, { useState } from "react";
import UpdateText from "./UpdateText";

export const UpdatedResult = (props) => {
  const [str, setStr] = useState(props.text);
  const [edit, setEdit] = useState(false);

  //Enabling the edit text field here
  const onEdit = () => {
    setEdit(true);
  };

  const onDelete = () => {
    props.deleteKey(props.i);
  };

  return (
    <>
      <div className="outputDiv">
        <div>
          <button>Done?</button>
        </div>

        <div>
          <button onClick={onDelete}>Delete</button>
        </div>
        <div>
          <button
            onClick={() => {
              onEdit();
            }}
          >
            Edit
          </button>
        </div>
      </div>

      {edit ? <UpdateText changedText={setStr} /> : ""}
    </>
  );
};
