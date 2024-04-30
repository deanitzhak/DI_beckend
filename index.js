require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoStorage = require('./bd/mongos');
const mongoStorageInstance = new MongoStorage();

// Apply bodyParser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

/* APIs */
const messageRouter = require('./routes/message.router');
app.use('/message', messageRouter);

// Define a default route
app.get('/', (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Start the server
app.listen(PORT, () => {
  mongoStorageInstance.connect();
  console.log(`Server listening on ${PORT}`);
});
