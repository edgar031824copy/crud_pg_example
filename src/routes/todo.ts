import express from "express";
import {
  addTodo,
  deleteById,
  getById,
  getTodos,
  updateTodo,
} from "../controller/todo";

const todoRouter = express.Router();

/* using only get and post for update and delete because those are the values supported for the method attribute in a native form, However,
using REST APIS this should be done with PUT and DElETE methods */
todoRouter.get("/", getTodos);
todoRouter.post("/", addTodo);
todoRouter.get("/:id", getById);
todoRouter.get("/delete/:id", deleteById);
todoRouter.post("/:id", updateTodo);

export default todoRouter;
