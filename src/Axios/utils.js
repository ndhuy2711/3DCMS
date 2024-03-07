import axios from "axios";
import { url } from "./";

export const urlBaseStrapi = url.urlBaseStrapi;
export const API = axios.create({
  baseURL: url.urlBaseApi,
});
