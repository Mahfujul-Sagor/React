import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import Home from "../../pages/Home/Home";

const getLocalData = ()=> {

  let storedData = localStorage.getItem('task');

  if (storedData) {
    return JSON.parse(storedData);
  }else {
    return [];
  }
};

function Sidebar() {
// using useRef hook instead
  const taskRef = useRef();

  const [tasks, setTasks] = useState(getLocalData());

  // const [newTask, setNewTask] = useState("");

  // const handleInputChange = (e) => {
  //   setNewTask(e.target.value);
  // };

  const addTask = (e) => {
    // if (newTask.trim() !== '') {
    //   setTasks((t) => [...t, newTask]);
    //   setNewTask('');
    // }
    e.preventDefault();
    // using useRef hook instead
    if (taskRef.current.value !== "") {
      const newTask = taskRef.current.value;
      taskRef.current.value = '';
      setTasks((t)=> [...t, newTask]);
    }
  };

  const deleteTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  };


  // add tasks to the local storage
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  },[tasks]);



  return (
    // Sidebar
    <div className="flex gap-2/3">

      <div className="bg-gray-700 text-white w-[15rem] min-h-screen p-4 flex flex-col items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" width="50px" />
          <h1 className="text-2xl font-bold max-sm:hidden">ToDoList</h1>
        </div>

        <form onSubmit={addTask} className="flex flex-col gap-1">
          <input
            ref={taskRef}
            type="text"
            // value={newTask}
            // onChange={handleInputChange}
            className="w-full bg-gray-500 rounded outline-none px-2 py-1"
            placeholder="Enter your task"
          />
          <button
            type="submit"
            // onClick={addTask}
            className="w-full bg-teal-500 font-semibold px-2 py-1 rounded"
          >
            Add
          </button>
        </form>

        <Footer />
      </div>

      {/* Tasks */}
      <div className="w-full bg-zinc-200">
        <nav className="bg-teal-400 p-1 text-white font-semibold flex justify-center items-center gap-4 drop-shadow-lg">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "text-[#3A506B]" : "";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "text-[#3A506B]" : "";
            }}
          >
            About
          </NavLink>
        </nav>
        <Home>
          <ol>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="bg-[#EFF6E0] font-semibold p-4 my-2 rounded shadow-lg outline flex justify-between items-center max-sm:flex-col"
              >
                <span className="m-2 text-center">{task}</span>
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 px-2 py-1 rounded text-white shadow-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => moveTaskUp(index)}
                    className="bg-blue-500 rounded px-2 py-1 shadow-lg hover:bg-blue-700"
                  >
                    👆
                  </button>
                  <button
                    onClick={() => moveTaskDown(index)}
                    className="bg-blue-500 rounded px-2 py-1 shadow-lg hover:bg-blue-700"
                  >
                    👇
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </Home>
      </div>
      
    </div>
  );
}

export default Sidebar;
