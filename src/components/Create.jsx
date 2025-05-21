import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let newTodo = { id: nanoid(), title };
    setTodos([...todos, newTodo]);

    setTitle("");
  };

  return (
    <div className="w-[60%] p-10">
      <h1 className="text-6xl font-thin mb-10">
        Set <span className="text-red-400">Remainder</span> for <br />
        Tasks
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="w-full border-b outline-0 px-3 py-2 text-2xl mb-10"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
        />
        <br />
        <button className="text-xl border px-10 py-3 rounded active:scale-95 cursor-pointer">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
