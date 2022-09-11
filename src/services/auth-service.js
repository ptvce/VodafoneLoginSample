// import { apiUrl } from "../config.json";
import http from "./http-service";

const tokenKey = "token-vodafone";

const apiUrl = "https://312ed48d-e184-4ec0-ae14-c55697e2dc7e.mock.pstmn.io/v1";
export async function login(userName) {
  let request = {};
  request.mobile = userName;
  const result = await http.post(`${apiUrl} /checkMobile`, request);
  localStorage.setItem(tokenKey, result.data.status);
  return result;
}

export function getCurrentUser() {
  try {
    const result = localStorage.getItem(tokenKey);
    return result;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  getCurrentUser
};
