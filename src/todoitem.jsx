import React from 'react';

const TodoItem = ({ title, completed, onToggle }) => {
  return (
    <div 
      className={`todo-item ${completed ? 'completed' : ''}`}
      onClick={onToggle}
    >
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={completed}
        onChange={onToggle}
        onClick={(e) => e.stopPropagation()} // Prevent double toggle
      />
      <span className={`todo-title ${completed ? 'completed' : ''}`}>
        {title}
      </span>
    </div>
  );
};

export default TodoItem;