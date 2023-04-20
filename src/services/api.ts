import { BASE_API_URL } from "@/constants/url.constants";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
