import React, { useState } from 'react';
import useTaskStore from '../store/useTaskStore';
import useMessageStore from '../store/useMessageStore';

const TaskForm = () => {
  const [text, setText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);
  const setMessage = useMessageStore((state) => state.setMessage);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if task name is empty or only whitespace
    const trimmedText = text.trim();
    if (!trimmedText) {
      setMessage('Task name cannot be empty', 'error');
      return;
    }

    try {
      addTask({ id: Date.now(), title: trimmedText, completed: false });
      setText('');
    } catch (error) {
      // Error message is already handled by addTask in the store
      console.error('Error in TaskForm:', error);
    }
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
