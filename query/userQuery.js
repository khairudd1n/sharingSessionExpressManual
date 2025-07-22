const {pool} = require('../db');

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

exports.updateUser = async (id, name, email, password) => {
  const result = await pool.query
  ('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
  [name, email, password, id]);
  return result.rows[0];
};

exports.deleteUser = async (id) => {
  const result = await pool.query
  ('delete from users where id = $1', [id]);
  return `data ${id} berhasil dihapus`
}
