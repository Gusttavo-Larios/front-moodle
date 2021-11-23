import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
  baseURL: env.ROUTE,
});

export default api;
