import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Kaam kr le bhai" }]);

  return (
    <div className="w-screen h-screen bg-gray-800 text-white p-10 flex">
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
