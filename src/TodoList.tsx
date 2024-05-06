import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  filter: string;
  onToggleComplete: (id: number) => void;
  onUpdateText: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, filter, onToggleComplete, onUpdateText, onDelete }) => {
  const filteredTodos = filter === 'all'
    ? todos
    : filter === 'completed'
    ? todos.filter(todo => todo.completed)
    : todos.filter(todo => !todo.completed);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onUpdateText={onUpdateText}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
