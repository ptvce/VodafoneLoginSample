import http from "./http-service";
// import apiUrl  from "../config.json";

const apiUrl = "https://18ddc2a6-6e2c-487a-813a-e455b9b4c626.mock.pstmn.io/v1";
export async function getLoginFormInfo() {
  const result = await http.get(`${apiUrl}/getLoginFormInfo`);
  return result;
}

export default {
  getLoginFormInfo
};
