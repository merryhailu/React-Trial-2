import React, { useState } from 'react';
import TodosssItem from './TodosssItem';

const Todosss = () => {
  const [text, setText] = useState('');
  const [listTodo, setListTodo] = useState([]);

  const add = () => {
    const textTrimmed = text.trim();

    const newTodolist = {
      id: Date.now(),
      title: textTrimmed,
      isCompleted: false,
    };

    setListTodo((prev) => [...prev, newTodolist]);
    setText('');
  };

  const deleteTodo = (id) => {
    setListTodo((prevtodo) => prevtodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setListTodo((prvTodo) =>
      prvTodo.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <>
      {/*    title */}
      <div>
        <h1>To do list</h1>
      </div>

      {/* input */}

      <div className="mx-4 ">
        <input
          className="rounded-full bg-amber-200 px-2 py-1"
          type="text"
          value={text}
          placeholder="Add your task"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => add()}
          className="w-32 rounded-full bg-amber-400 px-2 py-1 text-white hover:bg-sky-700"
        >
          Add
        </button>
      </div>

      {/* list */}

      <div>
        {listTodo.map((item, index) => (
          <TodosssItem
            id={item.id}
            key={index}
            title={item.title}
            deleteTodo={deleteTodo}
            toggle={toggle}
            isCompleted={item.isCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default Todosss;
