import express from "express";
import { tasks } from "../index.js";

const router = express.Router();
let id = 0;

router.post("/tasks", (req, res) => {
  const { title, description, completed } = req.body;

  const newTask = {
    id: id++,
    title,
    description,
    completed,
  };

  tasks.push(newTask);

  return res.status(201).json({ msg: "Task created successful", newTask: newTask });
});

router.get("/tasks", (req, res) => {
  return res.status(200).json(tasks);
});

router.put("/tasks/:id", (req, res) => {
  const { title, description, completed } = req.body;
  const taskID = Number(req.params.id);

  const taskExists = tasks.find(task => task.id === taskID);

  if (!taskExists) {
    return res.status(404).json({ msg: `Task ${taskID} not found` });
  }

  taskExists.title = title;
  taskExists.description = description;
  taskExists.completed = completed;

  const taskIndex = tasks.findIndex(task => task.id === taskID);

  tasks.splice(taskIndex, 1, taskExists);

  return res.status(201).json({ msg: "Task updated successful", updatedTask: taskExists });
});

router.delete("/tasks/:id", (req, res) => {
  const taskID = Number(req.params.id);

  const taskIndex = tasks.findIndex(task => task.id === taskID);

  tasks.splice(taskIndex, 1);

  return res.status(200).json({ msg: "Task deleted successful" });
});

export default router;
