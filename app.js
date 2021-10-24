const express = require('express');
const app = express();
const http = require('http');
app.get('/',(req, res) => {
const value = req.socket.remoteAddress;
    const currentTimeInSeconds=Math.floor(Date.now()/1000);
    const output = {
        "timestamp": currentTimeInSeconds,
        "ip": value
    }
res.send(JSON.stringify(output));
});


const port = process.env.PORT || 3000;
const hostname = process.env.hostname || '127.0.0.1' ;

app.listen(port, hostname);

