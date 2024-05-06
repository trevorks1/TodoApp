import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onUpdateText: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onUpdateText, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateText(todo.id, editText);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleToggleComplete} 
      />
      {isEditing ? (
        <input 
          type="text" 
          value={editText} 
          onChange={handleInputChange} 
          onKeyDown={handleKeyDown} 
          onBlur={handleSave} 
          autoFocus 
        />
      ) : (
        <span 
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
          onClick={handleEdit}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
