// Init server
const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log('Example app listening at http://localhost:5000');
})

// Init mongo
const mongoose = require('mongoose');
const uri ='mongodb+srv://oscar:12345@nike-cluster.lcvf4.mongodb.net/nike?retryWrites=true&w=majority'
mongoose.connect(uri).then(() => {
  console.log("Connected to mongodb");
});

//Init routes
require('./routes/mongo')(app);
require('./routes/marketingcloud')(app);

