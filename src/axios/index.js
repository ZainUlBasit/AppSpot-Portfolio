import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://appspot-admin-backend-production.up.railway.app/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
export const GetPortfolioApi = () => api.get("/portfolio");
export const SendEmailContactUsAPI = (payload) =>
  api.post("/send-email", payload);
