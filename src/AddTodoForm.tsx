import React, { useState } from 'react';

function AddTodoForm({ addTodo }: { addTodo: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return; // Don't add empty todos
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
