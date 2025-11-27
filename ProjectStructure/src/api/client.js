// src/api/client.js
import axios from "axios";

const BACKEND_URL = "https://YOUR_BACKEND_URL_HERE"; // <- put your Render backend URL

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 15000,
});

export async function createBuildingQuote({ address, height, windowCount, price }) {
  const res = await api.post("/quote", {
    address,
    height,
    windowCount,
    price,
  });
  return res.data;
}

export async function createGutterQuote({ address, linearFeet, stories }) {
  const res = await api.post("/gutter-quote", {
    address,
    linearFeet,
    stories,
  });
  return res.data;
}

export async function fetchQuotes() {
  const res = await api.get("/quotes");
  return res.data;
}

export default api;
