import React, { useEffect, useState } from 'react';
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

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prvTodo) => {
      return prvTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className="min-h-137 flex w-11/12 max-w-md flex-col place-self-center
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
        {todoList.map((list, index) => (
          <TodoItems
            key={index}
            title={list.title}
            id={list.id}
            isCompleted={list.isCompleted}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
