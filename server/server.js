const express = require('express');
const path = require('path');
const utils = require('./lib/hashUtils');

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/id', (req, res) => {
//   res.cookie('hash_id', 'laksdjfh');
//   res.cookie('ball_color', 'red-ball');
//   res.cookie('visits', '1');
//   res.send();
// })

app.listen(port, () => console.log(`Listening on port ${port}!`));
