import React from 'react';

const TodosssItem = ({ id, title, deleteTodo, toggle, isCompleted }) => {
  return (
    <>
      <div className="my-2 flex gap-2 px-2">
        <input
          className="w-14 flex-none"
          type="checkbox"
          onChange={() => toggle(id)}
        />
        <p
          className={`w-64 flex-initial  ${isCompleted ? 'line-through' : ''} `}
        >
          {title}
        </p>
        <button
          onClick={() => deleteTodo(id)}
          className="w-32 flex-initial rounded-full bg-sky-500 text-white hover:bg-sky-700"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodosssItem;
