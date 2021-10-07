import { useState } from "react";
import "./ToDoItem.css";
import success from "../media/zeldaitem.mp3";
import fail from "../media/chanchan.mp3";
import { useLocalStorageState } from "../utilities/localStorage";

export const ToDoItem = ({ name, id }) => {
  const [isDone, setIsDone] = useLocalStorageState("checked--" + id, false);

  const handleClick = () => {
    setIsDone(!isDone);
    isDone ? new Audio(fail).play() : new Audio(success).play();
  };

  const itemState = isDone
    ? "ToDoItem--item ToDoItem--is-done"
    : "ToDoItem--item";
  return (
    <li className={itemState} onClick={handleClick} id={id}>
      {name}
      🔥
    </li>
  );
};
