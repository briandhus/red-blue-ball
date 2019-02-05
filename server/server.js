const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Listening on port ${port}!`));




// from server
// if cookie is empty
// assign a hash, assign a color, times visited = 1;
// send back cookies