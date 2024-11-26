import { InternalAxiosRequestConfig, AxiosHeaders } from "axios";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
};
