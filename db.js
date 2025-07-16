const { Pool } = require('pg');

exports.pool = new Pool({
  user:'postgres',
  host: 'localhost',
  database: 'sharingSession',
  password: 'k123',
  port: 5432,
});

