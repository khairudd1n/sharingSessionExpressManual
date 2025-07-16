const pool = require('../db');

const getAllUsers = async () => {
  const result = await pool.query('SELECT id, name, email FROM users ORDER BY id');
  return result.rows;
};
const addUser = async (name, email, password) => {
  const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
  return result.rows[0];
};

const cekExistingUser = async (name) => {
  const result = await pool.query('SELECT * FROM users WHERE name = $1', [name]);
  return result.rows;
};

module.exports = {
  addUser,
  cekExistingUser,
  getAllUsers
};