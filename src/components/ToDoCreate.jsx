export const ToDoCreate = ({ onCreate }) => {
  return (
    <form
      className="ToDoCreate"
      onSubmit={(event) => {
        onCreate(event.target.elements.newTodo.value);
        event.preventDefault();
      }}
    >
      <label>
        add Todo:
        <input type="text" name="newTodo" />
      </label>
      <input type="submit" />
    </form>
  );
};
