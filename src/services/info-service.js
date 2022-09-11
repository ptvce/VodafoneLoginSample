// import { apiUrl } from "../config.json";
import http from "./http-service";

const tokenKey = "token ";

const apiUrl = "https://312ed48d-e184-4ec0-ae14-c55697e2dc7e.mock.pstmn.io/v1";
export async function getLoginFormInfo() {
  const result = await http.get(`${apiUrl} /getLoginFormInfo`);
  return result;
}

export default {
  getLoginFormInfo
};
