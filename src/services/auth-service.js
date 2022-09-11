import http from "./http-service";

const tokenKey = "token-vodafone";

const apiUrl = process.env.REACT_APP_API_URL;
export async function login(mobile) {
  let request = {};
  request.mobile = mobile;
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
