import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const AddTask = () => {
    setTasks(t => [...t, newTask]);
    setNewTask('');
  };

  const DeleteTask = (index) => {
    setTasks(t => t.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {

  };

  const moveTaskDown = (index) => {

  };

  return (
    <div className="min-h-screen bg-zinc-700 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-white text-2xl font-semibold">To Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task.."
        />
        <button
          className="bg-teal-400 text-white px-2 py-1 rounded"
          onClick={AddTask}
        >
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="bg-red-400 text-sm text-white px-2 py-1 font-semibold rounded" onClick={()=> DeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
      
    </div>
  );
}

export default ToDoList;
