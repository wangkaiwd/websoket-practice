const app = require('express')();
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection (ws) {
  console.log('server: receive connection.');

  ws.on('message', function incoming (message) {
    console.log('server: received: %s', message);
  });

  ws.send('world');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000, () => {
  `port is listening on ${8080}`;
});
