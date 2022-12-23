'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from Docker, my name is Alexandre and my partners name is Christ!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);