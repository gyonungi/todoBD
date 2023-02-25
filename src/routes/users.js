const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/users')

app.get('/users', getUsers);
app.post('/users', createUser);
app.get('/users/:id', getUser);
app.patch('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);