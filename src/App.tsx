import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppContainer, Form, Input, Button, TodoListContainer, TodoItem } from "./styles";
import { AppState, Todo } from "./types";
import { addTodo, toggleTodo } from "./actions";

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <TodoListContainer>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} onClick={() => handleToggle(todo.id)} completed={todo.completed}>
          {todo.text}
        </TodoItem>
      ))}
    </TodoListContainer>
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
    <Form onSubmit={handleSubmit}>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Button type="submit">Add Todo</Button>
    </Form>
  );
};

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </AppContainer>
  );
};

export default App;