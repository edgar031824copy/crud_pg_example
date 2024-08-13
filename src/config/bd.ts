import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
// Create a new Pool instance
const pool = new Pool({
  user: process.env.USER_NAME, // Database username
  host: process.env.HOST_NAME, // Database host
  database: process.env.DB_NAME, // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: Number(process.env.PORT_NUMBER) || 5432, // Default PostgreSQL port
});

export default pool;
