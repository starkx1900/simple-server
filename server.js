const http = require('node:http');

const host = 'localhost';
const port = 8900;

const server = http.createServer((request, response) => {
  request.headers;
  response.setHeader('Content-Type', 'text/plain');
  response.statusCode = 200;
  response.end(JSON.stringify('Ikembunna Givens Oby-Ezeani'));
});

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
