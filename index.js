const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//
const dbURI = 'mongodb+srv://mrsounder00:pxDbc4Au0bFgwL0g@cluster0.abcde.mongodb.net/bucketsound?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log('DB Connected! :tada:'))
  .catch((err) => console.log('DB Error:', err));

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});