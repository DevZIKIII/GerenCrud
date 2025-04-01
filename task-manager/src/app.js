const express = require('express');
const bodyParser = require('body-parser');
const TaskController = require('./tasks/taskController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const taskController = new TaskController();

app.post('/tasks', (req, res) => {
    taskController.createTask(req.body)
        .then(task => res.status(201).json(task))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.get('/tasks', (req, res) => {
    taskController.getTasks()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/tasks/:id', (req, res) => {
    taskController.updateTask(req.params.id, req.body)
        .then(task => res.status(200).json(task))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.delete('/tasks/:id', (req, res) => {
    taskController.deleteTask(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(404).json({ error: err.message }));
});

app.listen(port, () => {
    console.log(`Task Manager app listening at http://localhost:${port}`);
});