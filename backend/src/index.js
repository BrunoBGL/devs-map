const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://app:app2020@mycluster-0dzas.mongodb.net/test?retryWrites=true,', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.listen(3333, () => console.log);

app.use(cors());
app.use(express.json());
app.use(routes);
