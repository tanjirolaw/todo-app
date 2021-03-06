import React from "react";
import './App.css';
// Importing Component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Peet's Todo List</h1>
      </header>  
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
