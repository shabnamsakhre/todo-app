import { useContext } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./index.css";
import { todoContext } from "./Wrapper";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white p-10 flex">
      <Create />
      <Read />
    </div>
  );
};

export default App;
