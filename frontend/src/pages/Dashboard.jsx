import { useEffect, useState } from "react";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await addTask(newTask);
    setNewTask("");
    loadTasks();
  };

  const toggleTask = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <div className="p-6 max-w-3xl mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task..."
            className="flex-1 border p-2 rounded"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add Task
          </button>
        </div>

        <div className="bg-white rounded shadow">
          {tasks.length === 0 && (
            <p className="p-4 text-center text-gray-500">No tasks found.</p>
          )}

          {tasks.map((task) => (
            <div
              key={task._id}
              className="flex justify-between items-center border-b p-3"
            >
              <span
                onClick={() => toggleTask(task)}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </span>
              <button
                onClick={() => handleDelete(task._id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
