const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');

const routes = require('./routes/route.js');
app.use('/api', routes);

app.use(express.static(__dirname + '/../client/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), err => {
    if (err) res.status(500).send(err);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
