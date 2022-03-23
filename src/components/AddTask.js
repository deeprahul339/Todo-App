import React, { useState, useContext } from "react";
import { Result } from "./Result";
import { UserContext } from "../context/StateMgmt";
import { ArrContext } from "../context/StateMgmt";
let counter = 0;
const AddTask = () => {
  const contextArr = useContext(UserContext);
  // const setContextsrr = useContext(ArrContext);
  //arr,setArr]=user;
  const [text, setText] = useState("");
  //const [arr, setArr] = useState([]);
  const [optionValue, setOptionValue] = useState("All");

  //setting input text
  const inputEvent = (e) => {
    setText(e.target.value);
  };

  //code for Add Task Button
  const onSubmit = () => {
    if (text.length >= 1) {
      counter++;
      contextArr.setArr([
        ...contextArr.arr,
        { value: text, id: counter, isCompleted: false },
      ]);
      setText("");
    } else {
      alert("Text length should be greater than 1 ");
    }
  };

  //logic for deleting the key
  const deleteKey = (key1) => {
    const updateList = contextArr.arr.filter((item) => item.id !== key1);

    contextArr.setArr(updateList);
  };
  //filtering data
  const filterOption = (isCompleted, itemid) => {
    const a = contextArr.arr.map((item) => {
      if (item.id === itemid) {
        item.isCompleted = isCompleted;
      }
      return item;
    });
    contextArr.setArr(a);
  };
  // Selecting the option from the drop down
  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };
  return (
    <div className="Wrapper">
      <div className="addTask">
        <div>
          <input
            className="inputType"
            type="text"
            placeholder="Enter new task"
            onChange={inputEvent}
            value={text}
          />
        </div>
        <div>
          <button className="AddTask" onClick={onSubmit}>
            Add Task
          </button>
        </div>
        <div>
          <select
            className="Select"
            value={optionValue}
            onChange={handleSelect}
          >
            <option value="All">All</option>
            <option value="Comp">Completed</option>
            <option value="Act">Active</option>
          </select>
        </div>
      </div>
      {contextArr.arr.length !== 0 ? (
        contextArr.arr
          .map((item) => {
            if (
              (item.isCompleted === false && optionValue === "Act") ||
              (item.isCompleted === true && optionValue === "Comp") ||
              optionValue === "All"
            )
              return (
                <Result
                  key={item.id}
                  text={item.value}
                  i={item.id}
                  isCompleted={item.isCompleted}
                  deleteKey={deleteKey}
                  filterOption={filterOption}
                />
              );
            else {
              return null;
            }
          })
          .filter(Boolean)
      ) : (
        <h3>No Tasks Yet</h3>
      )}
    </div>
  );
};

export default AddTask;
