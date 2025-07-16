const pool = require('../db');

const addUser = async (name, email, password) => {
  const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
  return result.rows[0];
};

const cekExistingName = async (name) => {
  const result = await pool.query('SELECT * FROM users WHERE name = $1', [name]);
  return result.rows;
};

module.exports = {
  addUser,
  cekExistingName,
};