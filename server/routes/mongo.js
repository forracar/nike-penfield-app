const mongoose = require('mongoose');
const userDataSchema = require('../models/userdata');
const UserData = mongoose.model('UserData', userDataSchema);

module.exports = (app) => {
  app.get('/user/getdata', (req,res) => {
    console.log("Get user data: ", req.query.email);
    UserData.findOne({'user.email': req.query.email}).then((response) => {
      console.log("Mongo response at get user data: ", response);
      res.send(response);
    })
  })
}
