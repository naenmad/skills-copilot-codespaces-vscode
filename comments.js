// Create Web Server
const express = require('express');
const app = express();

// Create Middleware
app.use(express.json());

// Create Array
const comments = [
    {message: 'Hello'},
    {message: 'Hi'}
];

// Create Route
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Create Route
app.post('/comments', (req, res) => {
    const comment = {message: req.body.message};
    comments.push(comment);
    res.send(comment);
});

// Create Route
app.get('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    res.send(comment);
});

// Create Route
app.put('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    comment.message = req.body.message;
    res.send(comment);
});

// Create Route
app.delete('/comments/:id', (req, res) => {
    comments.splice(req.params.id, 1);
    res.send(comments);
});

// Create Port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Run Server
// node comments.js
// npm install nodemon -g
// nodemon comments.js
// npm install express
// npm install body-parser
// npm install nodemon -g
// npm install express
// npm install body-parser
// nodemon comments.js
// npm install express
// npm install body-parser