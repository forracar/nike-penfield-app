import axios from 'axios';

function getUserData() {
  axios.get('/user/getdata').then((response) => {
    console.log("Axios response: ", response);
    return response;
  }).catch((error) => {
    console.log("Axios error: ", error);
  })
}

function getMarketingCloudToken() {
  axios.get('/mc/token').then((response) => {
    console.log("Axios response token: ", response);
    return response;
  }).catch((error) => {
    console.log("Axios error: ", error);
  })
}

export {getUserData, getMarketingCloudToken};
