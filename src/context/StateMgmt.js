import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();
const StateMgmt = (props) => {
  const [arr, setArr] = useState([]);

  return (
    <UserContext.Provider value={{ arr: arr, setArr: setArr }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default StateMgmt;
