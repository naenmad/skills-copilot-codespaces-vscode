// Create Web Server
// Create a web server that listens on port 3000. When you navigate to http://localhost:3000/ in your browser, the server should respond with the following content:
// <html>
// <head>
// <title>Comments</title>
// </head>
// <body>
// <h1>Comments</h1>
// <ul>
// <li>Comment 1</li>
// <li>Comment 2</li>
// <li>Comment 3</li>
// </ul>
// </body>
// </html>
// Use the fs module to read the contents of comments.html and serve it as the response.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Error: File Not Found');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000);
console.log('Server listening on port 3000');