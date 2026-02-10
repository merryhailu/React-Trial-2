import React, { useState } from 'react';
import TodoItems from './TodoItems';

const Todo = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const add = () => {
    const inputText = text.trim();

    if (inputText === '') {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      title: inputText,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setText('');
  };

  return (
    <div
      className="flex min-h-[550px] w-11/12 max-w-md flex-col place-self-center
  rounded-xl bg-white p-7"
    >
      {/* Title */}

      <div className="item-center mt-7 flex gap-2">
        <h1 className="text-3xl font-semibold">To do list</h1>
      </div>

      {/*input */}

      <div className="my-7 flex items-center rounded-full bg-gray-200">
        <input
          className="h-14 flex-1 border-0 bg-transparent pl-6 pr-2 outline-none "
          type="text"
          value={text}
          placeholder="Add a Task"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={add}
          className="h-14 w-32 cursor-pointer rounded-full bg-orange-600 text-lg font-medium text-white"
        >
          Add
        </button>
      </div>

      {/*todo list */}
      <div>
        <TodoItems />
        <TodoItems />
      </div>
    </div>
  );
};

export default Todo;
