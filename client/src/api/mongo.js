import axios from 'axios';

function postUserData(data) {
  axios
    .post("/mongo/post/userdata", data)
    .then((response) => {
      console.log("[API][MONGO] POST USER DATA RESPONSE: ", response);
      return response;
    })
    .catch((error) => {
      console.log("[API][MONGO] POST USER DATA ERROR: ", error);
      return error;
    });
}

export { postUserData };
