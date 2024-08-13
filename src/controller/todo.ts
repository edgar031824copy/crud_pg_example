import { formatDate } from "../config/dbUtils";
import {
  addTodo as addTodoModel,
  getTodos as getTodosModel,
  getById as getTodoByIdModel,
  deleteById as deleteByIdModel,
  updateTodo as updateTodoModel,
} from "../models/todosModel";

export const addTodo = async (req: any, res: any) => {
  const { todo, date } = req.body;

  if (!todo || !date) {
    return res.status(400).json({ error: "Todo and date are required" });
  }

  try {
    await addTodoModel(todo, date);

    res.redirect("/todos");
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error });
  }
};

export const getTodos = async (_: any, res: any) => {
  try {
    const todos = await getTodosModel();

    res.render("index", { data: todos });
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error });
  }
};

export const getById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const data = await getTodoByIdModel(id);

    res.render("edit", {
      data: { ...data[0], date: formatDate(data[0].date) },
    });
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error });
  }
};

export const deleteById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    await deleteByIdModel(id);

    res.redirect("/todos");
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error });
  }
};

export const updateTodo = async (req: any, res: any) => {
  const { id } = req.params;
  const { todo, date } = req.body;

  try {
    await updateTodoModel(id, todo, date);

    res.redirect("/todos");
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error });
  }
};
