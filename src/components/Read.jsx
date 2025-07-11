import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Read = () => {
  const [todos, setTodos] = useContext(todoContext);
  console.log(todos.length);

  const deleteHandler = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);

    toast.error("Todo Deleted...");
  };

  const renderTodo = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-gray-900 text-2xl font-thin p-5 rounded mb-2"
      >
        <span>{todo.title}</span>
        <button
          className="text-sm text-red-400 cursor-pointer"
          onClick={() => deleteHandler(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h1 className="text-6xl font-thin mb-10">
        <span className="text-pink-400">Pending</span> Task
      </h1>
      <ol>{todos.length > 0 ? renderTodo : "No Pending Task...🎉"}</ol>
    </div>
  );
};

export default Read;
