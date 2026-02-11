import React, { useState } from 'react';

const TodoItems = ({ title, id, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className="my-3 flex items-center gap-2">
      <div className="flex flex-1 cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            toggle(id);
          }}
          isCompleted={isCompleted}
        />

        <div>
          <p className={`${isCompleted ? 'line-through' : ''}`} key={id}>
            {title}
          </p>
        </div>

        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
