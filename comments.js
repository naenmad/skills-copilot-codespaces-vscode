// Create Web Server
// Create a web server that listens on port 3000. When you navigate to http://localhost:3000/ in your browser, the server should respond with the following content:

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Comments</title>
// </head>
// <body>
//   <h1>Comments</h1>
//   <ul>
//     <li>Comment 1</li>
//     <li>Comment 2</li>
//     <li>Comment 3</li>
//     <li>Comment 4</li>
//     <li>Comment 5</li>
//   </ul>
// </body>
// </html>

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Comments</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Comments</h1>');
  res.write('<ul>');
  res.write('<li>Comment 1</li>');
  res.write('<li>Comment 2</li>');
  res.write('<li>Comment 3</li>');
  res.write('<li>Comment 4</li>');
  res.write('<li>Comment 5</li>');
  res.write('</ul>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});