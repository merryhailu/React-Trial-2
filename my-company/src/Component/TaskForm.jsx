import React, { useState } from 'react';
import useTaskStore from '../stores/useTaskStore';

const TaskForm = () => {
  const [text, setText] = useState('');

  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title: text.trim(), isCompleted: false });
    setText('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter your task"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
