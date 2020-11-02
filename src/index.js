const express = require('express');
const path = require('path');

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'about.html'));
});
