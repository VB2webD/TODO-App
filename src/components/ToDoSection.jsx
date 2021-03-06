import { v4 as uuidv4 } from "uuid";
import { ToDoList } from "./ToDoList";
import { ToDoCreate } from "./ToDoCreate";
import { useLocalStorageState } from "../utilities/localStorage";

import "./ToDoSection.css";

export const ToDoSection = () => {
  const [todos, setTodos] = useLocalStorageState("todos", [
    { id: uuidv4(), name: "Learn about components" },
    { id: uuidv4(), name: "Learn about props" },
    { id: uuidv4(), name: "Learn about state" },
  ]);

  // const [todos, setTodos] = useState(
  //   getItem("todos", )
  // );

  // useEffect(() => {
  //   setItem("todos", todos);
  // }, [todos]);
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
