import React, { useState } from 'react';
import useTaskStore from '../store/useTaskStore';

const TaskForm = () => {
  const [text, setText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title: text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter the Task"
        className="mr-2 w-60 rounded-md border border-gray-300 p-2"
      />
      <button type="submit" className="rounded-md bg-green-500 p-2 text-white">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
