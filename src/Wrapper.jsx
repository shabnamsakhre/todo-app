import { createContext, useState } from "react";

export const todoContext = createContext(null);

const Wrapper = (props) => {
  const [todos, setTodos] = useState([{ id: 1, title: "Kaam kr le bhai" }]);

  return (
    <todoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
