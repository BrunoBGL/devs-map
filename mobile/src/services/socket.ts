import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.3:3333', {
  autoConnect: false,
})

function subscribeToNewDevs(fn) {
  console.log(`eita${fn}, ${socket.connected}`);
  socket.on('new-dev', fn);
}

const connect = (options) => {
  console.log(options);

  socket.io.opts.query = options;
  socket.connect();
};
const disconnect = () => socket.connected ? socket.disconnect() : null;

export {
  subscribeToNewDevs,
  connect,
  disconnect,
}