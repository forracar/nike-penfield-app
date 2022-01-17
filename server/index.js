// Init server
const express = require('express');
const app = express();
const port = 5000;

// Init server
app.listen(port, () => {
  console.log('Example app listening at http://localhost:5000');
})

// Init mongo
require('./mongodb').connect();

//Init routes
require('./routes/mongo')(app);
require('./routes/marketingcloud')(app);

module.exports = app;
