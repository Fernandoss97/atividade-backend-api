import express from "express";
import TaskRoutes from "./routes/tasksRoutes.js";

const app = express();

const tasks = [];

app.use(express.json());
app.use(TaskRoutes);

export { app, tasks };
