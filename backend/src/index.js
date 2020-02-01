const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://app:app2020@mycluster-0dzas.mongodb.net/test?retryWrites=true,', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.listen(3333, () => console.log);

app.use(cors());
app.use(express.json());
app.use(routes);
