import http from "./http-service";
// import apiUrl  from "../config.json";

const tokenKey = "token-vodafone";
const apiUrl = "https://18ddc2a6-6e2c-487a-813a-e455b9b4c626.mock.pstmn.io/v1";
export async function login(mobile) {
  let request = {};
  request.mobile = mobile;
  const result = await http.post(`${apiUrl}/checkMobile`, request);
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
  getCurrentUser,
};
