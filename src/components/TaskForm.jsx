import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 mb-4 " onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Create your Task</h1>
        <input
          placeholder="Write your title task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Write a description for the task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="text-white bg-green-600 px-3 py-1 rounded-md mt-4 hover:bg-green-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
