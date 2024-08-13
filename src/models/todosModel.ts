import { runQuery } from "../config/dbUtils";

export const addTodo = async (todo: string, date: string) => {
  try {
    const { rows } = await runQuery(
      "INSERT INTO todos (todo,date) VALUES ($1, $2) RETURNING *",
      [todo, date]
    );

    return rows[0].id;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const { rows } = await runQuery("SELECT * FROM todos");
    return rows;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
};

export const getById = async (id: string) => {
  try {
    const { rows } = await runQuery("SELECT * FROM todos WHERE id = ($1)", [
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
};

export const deleteById = async (id: string) => {
  try {
    const { rows } = await runQuery("DELETE from todos WHERE id= ($1)", [id]);
    return rows;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
};

export const updateTodo = async (id: string, todo: string, date: Date) => {
  try {
    const { rows } = await runQuery(
      "UPDATE todos SET todo = ($1), date = ($2) WHERE id = ($3)",
      [todo, date, id]
    );
    return rows;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
};
