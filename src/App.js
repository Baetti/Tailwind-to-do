import { useReducer, useState } from "react";
import "./App.css";
import { AiFillDelete, AiFillEdit, AiOutlinePlus } from "react-icons/ai";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  const handleChange = () => {};
  const handleAdd = () => {
    dispatch
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full mt-10 mx-auto shadow p-2 rounded border card bg-emerald-300"
      >
        <div className="flex items-center justify-center mb-4 ">
          {" "}
          <p className="text-4xl mb-4 mt-2">My TO DO List</p>
        </div>

        <div className="flex items-center  gap-4 ">
          <input
            onChange={() => setNewTodo(e.target.value)}
            type="text"
            name=""
            id=""
            className="py-3 px-5 w-full rounded-md outline-none"
            placeholder="Enter Task To do"
          />

          <button className="py-3 px-5 p-4 font-semibold bg-cyan-500 rounded-md">
            <AiOutlinePlus />
          </button>
        </div>

        <ul className="flex flex-col gap-4 mt-10 ">
          <li className="flex items-center p-3 justify-between  hover:bg-black hover:bg-opacity-50 rounded-md transition-all">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-xl">Doing Homework</span>
            </div>
            <div className="flex items-center gap-2 ">
              <button
                type="button"
                className=" flex w-10 h-8 items-center justify-center cursor-pointer bg-blue-500 rounded-full"
              >
                <AiFillEdit></AiFillEdit>
              </button>
              <button
                type="button"
                className=" flex w-10 h-8 items-center justify-center cursor-pointer bg-red-500 rounded-full"
              >
                {" "}
                <AiFillDelete></AiFillDelete>
              </button>
            </div>
          </li>
        </ul>
      </form>
    </>
  );
}

export default App;
