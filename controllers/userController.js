const userQueries = require('../query/userQuery');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ error: 'name is required' });
    if (!email) return res.status(400).json({ error: 'email is required' });
    if (!password) return res.status(400).json({ error: 'password is required' });

    const existing = await userQueries.cekExistingUser(name);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Name already exists' });
    }

    const newRole = await userQueries.addUser(name, email, password);
    res.status(201).json(newRole);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add new user' });
  }
};

module.exports = {
  createUser,
};

