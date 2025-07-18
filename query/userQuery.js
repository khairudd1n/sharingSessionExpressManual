const pool = require('../db');

exports.getAllUsers = async () => {
  const result = await pool.query('SELECT id, name, email FROM users ORDER BY id');
  return result.rows;
};

exports.addUser = async (name, email, password) => {
  const result = await pool.query
  ('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
  [name, email, password]);
  return result.rows[0];
};

