import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todos }) => {
  return (
    <>
      <ul name="ToDos:">
        {todos.map(({ id, name }) => (
          <ToDoItem key={id} name={name} id={id} />
        ))}
      </ul>
    </>
  );
};
