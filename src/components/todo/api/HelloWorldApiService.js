import axios from "axios";

// export function retreiveHelloWorldBean() {
//   return axios.get("http://localhost:8080/hello-world");
// }

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retreiveHelloWorldBean = () => apiClient.get("/hello-world");

export const retreiveHelloWorldPathVariable = (username) =>
  apiClient.get(`/hello-world/path-variable/${username}`);
