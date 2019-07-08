const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
