import React, { useState } from 'react';
import TodoList from './TodoList'; 
import './App.css';

function App() {
  // Define state to hold the list of todos
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  // Function to add a new todo
  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        {/* Render TodoList component and pass todos and addTodo function as props */}
        <TodoList todos={todos} addTodo={addTodo} />
      </main>
      <footer>
        {/* Footer content */}
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
