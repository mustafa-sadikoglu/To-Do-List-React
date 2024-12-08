import React from "react";
import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
