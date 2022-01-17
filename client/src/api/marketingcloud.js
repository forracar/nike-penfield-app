import axios from 'axios';

async function fireJourney(data, token) {
  return new Promise((resolve) =>
    axios
      .post("/marketingcloud/post/interactionevent", data)
      .then((response) => {
        console.log("[API][MC] Event fired", response);
        return resolve(response);
      })
      .catch((error) => {
        console.log("[API][MC] Event error: ", error);
        return resolve(error);
      })
  );
}

async function getMarketingCloudToken() {
  return new Promise((resolve)=>
    axios
      .post("/marketingcloud/post/token")
      .then((response) => {
        console.log("[MARKETING CLOUD] Got token success: ", response.data);
        return resolve(response);
      })
      .catch((error) => {
        console.log("[MARKETING CLOUD] Error getting token: ", error);
        return resolve(error);
      })
  );
}

export { fireJourney, getMarketingCloudToken };


