import { getMarketingCloudToken } from "../api/marketingcloud";

async function validateMarketingCloudToken(token) {
  if (!token) {
    let token = await getMarketingCloudToken();
    localStorage.setItem("marketingcloud-token", token);
  } else if (token.expires_in < new Date() / 1000) {
    let token = await getMarketingCloudToken();
    localStorage.setItem("marketingcloud-token", token);
  }
  return token;
}

export { validateMarketingCloudToken };
