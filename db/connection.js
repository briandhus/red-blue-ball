const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'coloredBalls',
});