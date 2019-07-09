const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');

const routes = require('./routes/route.js');
app.use('/', routes);

app.use(express.static(__dirname + '/../client/dist'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
