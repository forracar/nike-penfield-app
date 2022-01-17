const axios = require("axios");
const marketingcloudconfig = require("../config/marketingcloud-config");

module.exports = (app) => {
  app.get("/marketingcloud/get/token", (req, res) => {
    axios
      .post(
        marketingcloudconfig.authURI + marketingcloudconfig.endpoints.token,
        {
          grant_type: "client_credentials",
          client_id: marketingcloudconfig.clienID,
          client_secret: marketingcloudconfig.clientSecret,
        }
      )
      .then((response) => {
        console.log("[API][TOKEN] SUCCESS RESPONSE: ", response.data);
        res.send(response.data);
      })
      .catch((error) => {
        console.log("[API][TOKEN] ERROR RESPONSE: ", error);
        res.send(error);
      });
  });

  app.post("/marketingcloud/post/interactionevent", (req, res) => {
    axios
      .post(
        marketingcloudconfig.baseURI + marketingcloudconfig.endpoints.fireEvent,
        {
          ContactKey: marketingcloudconfig.events.contactKey,
          EventDefinitionKey: marketingcloudconfig.events.eventDefinitionKey,
          // TODO: (Optional) properties of the event, when the event if defined pass data set in front-end
          Data: {},
        }
      )
      .then((response) => {
        console.log("[API][FIRE EVENT] RESPONSE: ", response);
        res.send(response);
      })
      .catch((error) => {
        console.log("[API][fire event] ERROR RESPONSE: ", error);
        res.send(error);
      });
  });
};
