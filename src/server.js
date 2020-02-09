const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const appp = './App.js'

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  res.render('App.js')
});