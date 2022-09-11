import http from "./http-service";

const apiUrl = process.env.REACT_APP_API_URL;
export async function getLoginFormInfo() {
  const result = await http.get(`${apiUrl} /getLoginFormInfo`);
  return result;
}

export default {
  getLoginFormInfo
};
