const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
// MySQL Connection
const db = mysql.createConnection({
  host: 'mysqldesafio',
  user: 'root',
  password: 'RootPassword',
  database: 'desafio'
});
// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});
// Routes
app.get('/', (req,res) => {
    db.query('INSERT INTO people (nome) VALUES ("teste");', (err, results) => {
        if (err) {
          console.error('Error executing query: ' + err.stack);
          res.status(500).send('Error fetching users');
          return;
        }
    });    
    res.send('<h1>Full cycle</h1>')
})
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM people', (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
