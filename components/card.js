"use client";

import { useState } from "react";

const Card = () => {
  const obj = [
    { id: 1, title: "Title", Desc: "Buy groceries" },
    { id: 2, title: "Title", Desc: "Do laundry" },
    { id: 3, title: "Title", Desc: "Study for exam" },
  ];
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDesc, setNewTodoDesc] = useState("");

  const addTodo = () => {
    if (newTodoTitle.trim() !== "" && newTodoDesc.trim() !== "") {
      const newTodoItem = {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        title: newTodoTitle.trim(),
        desc: newTodoDesc.trim(),
      };
      setTodos([...todos, newTodoItem]);
      setNewTodoTitle("");
      setNewTodoDesc("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="w-screen flex flex-col justify-center items-center font-serif mb-[100px]">
      <div className=" w-[80%] flex flex-col justify-center items-center mb-[40px] bg-orange-200 p-[20px] rounded">
        <div className=" flex justify-center items-center p-5 mb-7">
          <h2 className="text-2xl font-bold capitalize ">
            Create New Todo List
          </h2>
        </div>
        <div className="flex flex-col gap-y-6 w-[40%]">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Todo Title"
            className="w-full h-[50px] bg-transparent border-4 border-white text-[20px]  p-2 rounded focus:outline-none"
          />
          <textarea
            className="w-full h-[100px] bg-transparent border-4 border-white text-[20px]  p-2 rounded focus:outline-none"
            placeholder="Description"
            value={newTodoDesc}
            onChange={(e) => setNewTodoDesc(e.target.value)}
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white px-10 py-3 rounded text-[20px] hover:bg-blue-800"
              onClick={addTodo}
            >
              Add ToDo
            </button>
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-center items-center">
        <div className="w-[80%] flex flex-col gap-y-[50px]">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-blue-300 w-full min-h-24 rounded p-10"
            >
              <h3 className="text-xl font-bold capitalize mb-5 text-center">
                {todo.title}
              </h3>
              <p className="text-[20px]">{todo.desc}</p>
              <div className="flex justify-center mt-10">
                <button
                  className="bg-slate-700 text-white px-7 py-2 rounded text-[20px]"
                  onClick={() => removeTodo(todo.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
