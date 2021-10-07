import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ToDoList } from "./ToDoList";
import { ToDoCreate } from "./ToDoCreate";

import "./ToDoSection.css";

export const ToDoSection = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Learn about components" },
    { id: uuidv4(), name: "Learn about props" },
    { id: uuidv4(), name: "Learn about state" },
  ]);
  
  return (
    <div className="ToDoSection--container">
      <ToDoCreate
        onCreate={(name) => {
          setTodos([
            ...todos,
            {
              id: uuidv4(),
              name,
            },
          ]);
        }}
      />
      <ToDoList todos={todos} />
    </div>
  );
};
