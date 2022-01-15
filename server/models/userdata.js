const mongoose = require('mongoose');
const {Schema} = mongoose;

const userDataSchema = new Schema({
  vouchercode: String,
  user: {
    email: String,
    name: String
  }
})
