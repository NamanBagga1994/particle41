//const express = require('express');
//const app = express();
const http = require('http');
//const appConfig = require('./appConfig');
//const hostname = '127.0.0.1';
//const port = 3000;

const port = process.env.PORT || 3000;
const hostname = process.env.hostname || '127.0.0.1' ;

const server = http.createServer((req, res) => {
    const value = req.socket.remoteAddress;
    const currentTimeInSeconds=Math.floor(Date.now()/1000);
    const output = {
        "timestamp": currentTimeInSeconds,
        "ip": value
    }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(output));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

