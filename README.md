# Mini CRUD Backend con Node.js, Express y MySQL

Este proyecto es una API REST simple para gestionar tareas (to-do list), usando Node.js, Express.js y MySQL.

## Requisitos

- Node.js y npm
- MySQL

## Instalación

1. Cloná el proyecto.
2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Configurá la conexión a la base de datos en `db.js` si es necesario (usuario, contraseña).

4. Creá la base de datos y la tabla `tasks`:

   ```sql
   CREATE DATABASE crud_tasks;

   USE crud_tasks;

   CREATE TABLE tasks (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     completed BOOLEAN DEFAULT FALSE
   );
   ```

5. Iniciá el servidor:

   ```bash
   npm start
   ```

6. La API estará disponible en `http://localhost:3000`.

   - `GET /api/tasks`: Obtener todas las tareas.
   - `GET /api/tasks/:id`: Obtener una tarea por ID.
   - `POST /api/tasks`: Crear una nueva tarea.
   - `PUT /api/tasks/:id`: Actualizar una tarea por ID.
   - `DELETE /api/tasks/:id`: Eliminar una tarea por ID.

7. Para probar la API, podés usar Postman o cualquier cliente HTTP.

## Estructura del Proyecto

```
.
├── controllers.js
├── db.js
├── models.js
├── package.json
├── README.md
├── routes.js
└── server.js
```

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL