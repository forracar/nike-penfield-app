const axios = require('axios');
const authuri = 'https://mc2hrw9w4dptkls8hvd-wwlct100.auth.marketingcloudapis.com/';
const baseuri = 'https://mc2hrw9w4dptkls8hvd-wwlct100.rest.marketingcloudapis.com/';
const clientId = '0taks8tx5o3osinjtk3q4h4y';
const clientSecret = 'QrZZFiPiWFtWUUhdLai25Yj6';

module.exports = (app) => {
  app.get('/mc/token', (req,res) => {
    console.log("Get token!!!!!!");
    axios.post(authuri + '/v2/token',{
      'grant_type': 'client_credentials',
      'client_id': clientId,
      'client_secret': clientSecret
    }).then((response) => {
      console.log("TOKEN RESPONSE: ", response.data);
      res.send(response.data);
    }).catch((error) => {
      console.log("TOKEN ERROR: ", error)
    })
  })
}
