const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}!`));




// from server
// if cookie is empty
// assign a hash, assign a color, times visited = 1;
// send back cookies