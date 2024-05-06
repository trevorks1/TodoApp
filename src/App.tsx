// App.tsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm component
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Example Todo 1', completed: false },
    { id: 2, text: 'Example Todo 2', completed: false },
    // Add more initial todos if needed
  ]);

  const updateText = (id: number, newText: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: number) => {
    // Toggle the completion status of the todo item with the given ID
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (text: string) => {
    // Add a new todo item with the provided text
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Remove a todo item with the given ID
  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        {/* Integrate the AddTodoForm component */}
        <AddTodoForm addTodo={addTodo} />
        {/* Pass todos, toggleComplete, and deleteTodo as props to TodoList */}
        <TodoList todos={todos} onToggleComplete={toggleComplete} onUpdateText={updateText} onDelete={deleteTodo} />
      </main>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
