const userQueries = require('../query/userQuery');

exports.createUser = async (req, res) => {
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

exports.getUsers = async (req, res) => {
  try {
    const users = await userQueries.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengambil data users' });
  }
};


