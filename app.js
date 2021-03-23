//------------------------------------------------------------------------------
// node.js  application 
//------------------------------------------------------------------------------


// This application uses express as its web server
// for more info, see: http://expressjs.com
import express from 'express';

var serverPort = 8080;

// create a new express server
var app = express();

// define the home page route
app.get('/', function (req, res) {

    let now = (new Date()).toISOString();
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(`${now} Hello World!`);
    res.end();
});


var server = app.listen(serverPort, "0.0.0.0", function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server started and listening http://${host}:${port}`)
});


server.on('connection', function(socket) {
    console.log(`new connection, remote address: ${socket.remoteAddress}`);
});

