import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Todo } from "./types";
import { addTodo, toggleTodo } from "./actions";

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;