import axios from "axios";
const appAxios = axios.create({
  //baseURL: "https://auth.comed.com.tr/"
});

appAxios.interceptors.request.use((request) => {
  request.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
  //   request.headers.common["Accept"] = "application/x-www-form-urlencoded";
  return request;
});

export default appAxios;
