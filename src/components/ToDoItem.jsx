import { useState } from "react";
import "./ToDoItem.css";
import success from "../media/zeldaitem.mp3";
import fail from "../media/chanchan.mp3";

export const ToDoItem = ({ name }) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(!isDone);
    isDone ? new Audio(fail).play() : new Audio(success).play();
  };

  const itemState = isDone
    ? "ToDoItem--item ToDoItem--is-done"
    : "ToDoItem--item";
  return (
    <li className={itemState} onClick={handleClick}>
      {name}
    </li>
  );
};
