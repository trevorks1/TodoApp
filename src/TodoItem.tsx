import React from 'react';

function TodoItem({ todo }: { todo: { id: number; text: string; completed: boolean } }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
      <button>Delete</button>
    </li>
  );
}

export default TodoItem;
