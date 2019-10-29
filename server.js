const express = require('express');
const app = express();
const WebSocket = require('ws');
const SW_PORT = 8080;
const SERVER_PORT = 3000;
const wss = new WebSocket.Server({ port: SW_PORT });
let timerId = null;
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('服务器接收：', message);
  });
  let i = 0;
  timerId = setInterval(() => {
    i++;
    ws.send('我是服务端' + i);
  }, 1000);
});
wss.on('close', () => {
  clearInterval(timerId);
  timerId = null;
});
app.listen(SERVER_PORT, () => {
  console.log(`port is listening on ${SERVER_PORT}`);
});
