import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-xelh.onrender.com/api",
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// AUTH
export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);

// TASKS
export const getTasks = () => api.get("/tasks");
export const addTask = (title) => api.post("/tasks", { title });
export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
