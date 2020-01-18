const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://app:app2020@mycluster-0dzas.mongodb.net/test?retryWrites=true,', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000, () => console.log);

app.use(express.json());
app.use(routes);

