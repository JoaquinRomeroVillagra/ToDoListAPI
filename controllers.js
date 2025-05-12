const Task = require('./models');

exports.getAllTasks = (req, res) => {
  Task.getAll((err, tasks) => {
    if (err) return res.status(500).json({ error: err });
    res.json(tasks);
  });
};

exports.getTaskById = (req, res) => {
  const { id } = req.params;
  Task.getById(id, (err, task) => {
    if (err) return res.status(500).json({ error: err });
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
  });
};

exports.createTask = (req, res) => {
  const newTask = req.body;
  Task.create(newTask, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Tarea creada', id: result.insertId });
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  Task.update(id, updatedTask, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Tarea actualizada' });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Tarea eliminada' });
  });
};
