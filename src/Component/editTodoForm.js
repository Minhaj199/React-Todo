import { React, useState } from "react";

export const EditTodoForm = ({ editTodo ,task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        name="addTodo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-inputEdit"
        placeholder="Update Your Task"
        type="text"
      />
      <button type="submit" className="todo-btnEdit">
        EDIT TASK
      </button>
    </form>
  );
};
