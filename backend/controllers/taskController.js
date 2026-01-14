import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title });
    res.json(task);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
