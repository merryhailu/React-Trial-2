import React from 'react';
import useTaskStore from '../store/useTaskStore';

const TaskList = () => {
  const { tasks, removeTask, toggleTask } = useTaskStore();
  return (
    <>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`mb-2 flex items-center rounded-md bg-gray-100 p-2`}
          >
            <span
              className={`mr-4 flex-grow ${
                task.completed ? 'line-through' : ''
              }`}
            >
              {task.title}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2 h-4 w-4 cursor-pointer text-green-500"
            />
            <button
              onClick={() => removeTask(task.id)}
              className="cursor-pointer rounded-md bg-red-500 px-2 py-1 text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
