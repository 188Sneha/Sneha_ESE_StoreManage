import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-complaint-backend-9088.onrender.com/api",
});

export default API;