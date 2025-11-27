import axios from "axios";

const API = axios.create({
  baseURL: "https://clearview-backend.onrender.com/api"
});

export default API;
