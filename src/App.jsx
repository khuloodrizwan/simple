import React, { useState } from 'react';
import TodoItem from './todoitem';
import './App.css'; // Import the CSS file

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build TodoItem Component', completed: true },
    { id: 3, title: 'Style the Todo App', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Todo List</h1>
      </header>
      
      <div className="todo-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            No tasks yet. Add some tasks to get started!
          </div>
        ) : (
          tasks.map(task => (
            <TodoItem
              key={task.id}
              title={task.title}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;