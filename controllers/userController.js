const userQueries = require('../query/userQuery');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userQueries.addUser(name, email, password);
    res.status(201).json(newUser);
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

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedUser = await userQueries.updateUser(id, name, email, password);
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal memperbarui data user' });
  }
};

exports.deleteUser = async (req, res) =>{
  try{
    const {id} = req.query;
    const deleteduSER = await userQueries.deleteUser(id)
    res.json(deleteduSER)
  } catch(err){
    console.error(err)
    res.status(500).json({error: 'Gagfal delete data user '})
  }
}


