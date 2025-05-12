const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Cambiá esto si tenés otro usuario
  password: '',        // Poné tu contraseña si usás una
  database: 'crud_tasks'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
