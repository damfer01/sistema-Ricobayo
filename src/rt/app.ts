const express= require ('express');
import { create, index, show, update, deleteLogin } from '../service/userService';

const app = express();
app.use(express.json());

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    await create(name, password);
    res.status(201).send('Login created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/logins', async (req, res) => {
  try {
    const logins = await index();
    res.status(200).json(logins);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/login/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const login = await show(id);
    if (!login) {
      res.status(404).send('Login not found');
    } else {
      res.status(200).json(login);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/login/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, password } = req.body;
    await update(id, name, password);
    res.status(200).send('Login updated');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/login/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteLogin(id);
    res.status(200).send('Login deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
});