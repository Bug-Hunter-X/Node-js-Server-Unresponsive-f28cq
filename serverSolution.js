const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors
server.on('error', err => {
  console.error('Server error:', err);
});

// Listen for requests on a specific port
server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
