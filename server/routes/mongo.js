const mongoose = require("mongoose");
const authMiddleware = require("../middleware/auth");
const contactSchema = require("../models/contact-model");
const ContactModel = mongoose.model("ContactModel", contactSchema);
const {generateVoucherCode} = require('../utils')

module.exports = (app) => {
  app.get("/mongo/get/vouchercode", authMiddleware, (req, res) => {
    ContactModel.findOne({ "user.vouchercode": req.query.vouchercode }).then(
      (response) => {
        // TODO: Check if it's found or not
        //
        // 1. If voucher code its fine return response with true
        // 2. If voucher code its not defined return with false
        res.send(response);
      }
    );
  });

  app.post("/mongo/post/contactdata", authMiddleware, (req, res) => {
    // TODO: Check if contact already submit survey
    // otherwise generate code and create document in mongodb
    const surveyData = req.params.survey;
    const contactData = req.params.contactdata;
    
    contactData.vouchercode = generateVoucherCode();

    ContactModel.create({survey: surveyData, contact: contactData}).then((response) => {
      console.log("[MONGO] Contact Model create documment SUCCESS: ", response);
      res.send(response);
    }).catch((error) => {
      console.log("[MONGO] Contact Model ERROR at creating document: ", error);
      res.send(error);
    })
  });
};
