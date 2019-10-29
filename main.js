const ws = new WebSocket('ws://localhost:8080');
ws.onopen = function () {
  ws.send('from client: hello');
};
ws.onmessage = function (e) {
  console.log('ws onmessage');
  console.log('from server: ' + e.data);
};
