const socketio = require('socket.io');

const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];
exports.setupWebSocket = (server) => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs)
    });
  });
};

exports.findConnections = (coordinates, techs) => {
  console.log(connections);

  return connections.filter(connection => {
    console.log(calculateDistance(coordinates, connection.coordinates) < 10);

    return calculateDistance(coordinates, connection.coordinates) < 10
      && connection.techs.some(tech => techs.includes(tech));
  })
};

exports.sendMessage = (to, message, data) => {
  console.log(`${to.id} ${message} ${data}`);
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
}
