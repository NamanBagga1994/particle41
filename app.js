const express = require('express');
const app = express();
const http = require('http');

const port = 8080;
const hostname = '0.0.0.0' ;


app.get('/',(req, res) => {
const value = req.socket.remoteAddress;
    const currentTimeInSeconds=Math.floor(Date.now()/1000);
    const output = {
        "timestamp": currentTimeInSeconds,
        "ip": value
    }
res.send(JSON.stringify(output));
});


app.listen(port, hostname);

