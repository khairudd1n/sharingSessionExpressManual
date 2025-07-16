const { Pool } = require('pg');

// sesuain dengan db lu
const pool = new Pool({
  user:'postgres',
  host: 'localhost',
  database: 'sharingSession',
  password: 'k123',
  port: 5432,
});

module.exports = pool;
