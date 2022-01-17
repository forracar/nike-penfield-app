import axios from 'axios';

async function postContactData(surveyData, personalInfoData) {

  return new Promise(() =>
    axios
      .post("/mongo/post/contactdata", {
        params: {
          survey: surveyData,
          contactdata: personalInfoData,
        },
      })
      .then((response) => {
        console.log("[API][MONGO] POST USER DATA RESPONSE: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log("[API][MONGO] POST USER DATA ERROR: ", error);
        return Promise.resolve(error);
      })
  );
}

export { postContactData };
