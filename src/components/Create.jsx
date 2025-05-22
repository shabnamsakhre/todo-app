import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todoContext } from "../Wrapper";

const Create = () => {
  const [todos, setTodos] = useContext(todoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setTodos([...todos, data]);

    toast.success("Todo Created !!!");

    reset();
  };

  return (
    <div className="w-[60%] p-10">
      <h1 className="text-6xl font-thin mb-10">
        Set <span className="text-red-400">Remainder</span> for <br />
        Tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="w-full border-b outline-0 px-3 py-2 text-2xl"
          {...register("title", { required: "Title can not be empty" })}
          type="text"
          placeholder="Title"
        />
        <span className="text-red-400">{errors?.title?.message}</span>
        <br />
        <button className="text-xl border mt-10 px-10 py-3 rounded active:scale-95 cursor-pointer">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
