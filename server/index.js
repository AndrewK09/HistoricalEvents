const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/events', (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
