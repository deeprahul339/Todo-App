import React, { useState } from "react";
import UpdateText from "./UpdateText";

export const Result = (props) => {
  console.log("is completed", props.isCompleted);
  const [str, setStr] = useState(props.text);
  const [edit, setEdit] = useState(false);
  const [done, setDone] = useState(true);
  const [flag, setflag] = useState(true);
  //Enabling the edit text field here
  const onEdit = () => {
    setEdit(true);
    setflag(true);
  };
  const completedTask = () => {
    setDone(!done);
    props.filterOption(done, props.i);
  };

  const onDelete = () => {
    props.deleteKey(props.i);
  };

  return (
    <>
      <div className="outputDiv">
        <button className="done" onClick={completedTask}>
          {done ? "Done" : "Undone"}
        </button>

        <p>
          <span className={props.isCompleted ? "crossed-line " : ""}>
            {str}
          </span>
        </p>

        <button className="delete" onClick={onDelete}>
          Delete
        </button>

        <button
          className="edit"
          onClick={() => {
            onEdit();
          }}
        >
          Edit
        </button>
      </div>

      {edit ? (
        <UpdateText
          changedText={setStr}
          flag={flag}
          setFlag={setflag}
          edit={edit}
        />
      ) : (
        ""
      )}
    </>
  );
};
