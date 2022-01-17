const mongoose = require("mongoose");
const mongoConfig = require("./config/mongo-config");

exports.connect = () => {
  mongoose
    .connect(mongoConfig.uri)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((error) => {
      console.log(
        "[MONGO] Unnable to connect to " + mongoConfig.uri + ": ",
        error
      );
      process.exit(1);
    });
};
