import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  addTodo: (text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
