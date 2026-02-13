import React from 'react';
import useTaskStore from '../stores/useTaskStore';

const TaskList = () => {
  const { tasks, removeTask, toggleTask } = useTaskStore();
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="flex">
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTask(task.id)}
          />
          <p
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.title}
          </p>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default TaskList;
