// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./comments.html').pipe(res);
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});