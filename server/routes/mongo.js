const mongoose = require("mongoose");
const contactSchema = require("../models/contactmodel");
const ContactModel = mongoose.model("ContactModel", contactSchema);

module.exports = (app) => {
  app.get("/mongo/get/vouchercode", (req, res) => {
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

  app.post("/mongo/post/contactdata", (req, res) => {
    // TODO: POST CONTACT DATA TO MONGODB
    //
    // 1. Get if user name is already registered
    //   1.1 If user is already registered don't send vouchercode and
    //   return
    // 2. User dosn't exist
    //    2.1 Generate vouchercode
    //    2.2 Post mongodb data
  });
};
