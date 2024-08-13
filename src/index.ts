import express from "express";
import cors from "cors";
import path from "path";
import todoRouter from "./routes/todo";

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the templating engine
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.use("/todos", todoRouter);

app.listen(port, () => console.log(`running on port ${port}`));
