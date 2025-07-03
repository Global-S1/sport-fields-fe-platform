import { config } from "@/config/config";
import axios from "axios";

const headers = {
  Accept: "application/json",
};

const privateConfig = axios.create({
  baseURL: `${config.SPORT_FIELDS_API}`,
  headers,
});

export const publicInstance = axios.create({
  baseURL: `${config.SPORT_FIELDS_API}`,
  headers,
});

export const privateInstance = privateConfig;
