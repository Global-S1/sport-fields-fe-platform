import axios from "axios";
import { config } from "@/config/config";
import { LANG_VALUE } from "@/shared/enums/global.enum";

const headers = {
  Accept: "application/json",
};

const privateConfig = axios.create({
  baseURL: `${config.SPORT_FIELDS_API}`,
  headers,
});

privateConfig.interceptors.response.use(
  (resp) => resp,
  (error) => {
    if (error?.response?.status === 401) {
      const lang = localStorage.getItem("current-lang") || LANG_VALUE.EN;
      localStorage.clear();
      localStorage.setItem("current-lang", lang);
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export const publicInstance = axios.create({
  baseURL: `${config.SPORT_FIELDS_API}`,
  headers,
});

export const privateInstance = privateConfig;
