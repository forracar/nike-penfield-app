const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  survey: {
    question: String,
    suggestions: String,
  },
  contact: {
    email: String,
    firstname: String,
    secondname: String,
    mobilenumber: Number,
    subscriber: Boolean,
  },
});

module.exports = contactSchema;
