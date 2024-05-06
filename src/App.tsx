import React, { useState } from 'react';
import TodoList from './TodoList';
import FilterTodos from './FilterTodos'; // Import the FilterTodos component
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Example Todo 1', completed: false },
    { id: 2, text: 'Example Todo 2', completed: false },
    // Add more initial todos if needed
  ]);
  const [filter, setFilter] = useState('all'); // Add filter state

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateText = (id: number, newText: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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
        <FilterTodos filter={filter} setFilter={setFilter} /> {/* Add FilterTodos component */}
        <TodoList todos={todos} filter={filter} onToggleComplete={toggleComplete} onUpdateText={updateText} onDelete={deleteTodo} /> {/* Pass filter prop */}
      </main>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
