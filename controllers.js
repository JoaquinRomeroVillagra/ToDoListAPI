const Task = require('./models');

// Validación simple de los datos de entrada
function validateTaskInput(task) {
  if (!task.title || typeof task.title !== 'string' || !task.title.trim()) {
    return 'El título es requerido y debe ser un string no vacío';
  }
  if ('completed' in task && typeof task.completed !== 'boolean') {
    return 'El campo completed debe ser booleano';
  }
  return null;
}

exports.getAllTasks = (req, res) => {
  Task.getAll((err, tasks) => {
    if (err) return res.status(500).json({ error: 'Error al obtener tareas' });
    res.json(tasks);
  });
};

exports.getTaskById = (req, res) => {
  const { id } = req.params;
  Task.getById(id, (err, task) => {
    if (err) return res.status(500).json({ error: 'Error al buscar la tarea' });
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(task);
  });
};

exports.createTask = (req, res) => {
  const newTask = req.body;
  const validationError = validateTaskInput(newTask);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  Task.create(newTask, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al crear la tarea' });
    res.status(201).json({ message: 'Tarea creada', id: result.insertId });
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  const validationError = validateTaskInput(updatedTask);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  Task.update(id, updatedTask, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar la tarea' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea actualizada' });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar la tarea' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada' });
  });
};
