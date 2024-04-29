require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT;
const root = require('./routes/root');

app.get(root, (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });