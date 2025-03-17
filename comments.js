// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Create a JSON body parser
app.use(express.json());

// Create a comments array
const comments = [];

// Create a GET request to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a POST request to add a comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json({ username, comment });
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});