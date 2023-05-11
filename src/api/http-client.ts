import axios from "axios";

export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});
