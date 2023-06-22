const { Pool } = require("pg");

require("dotenv").config();


const pool = new Pool({
  user: process.env.VITE_DB_USER,
  host: process.env.VITE_DB_HOST,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB_DATABASE,
  allowExitOnIdle: true,
});




module.exports = pool
