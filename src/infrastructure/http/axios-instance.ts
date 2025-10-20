
import axios, { AxiosError } from "axios";
import { ERROR_MESSAGES } from "./constants/errors-messages";


export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
      const status = error.response?.status ?? 500;
    const message = ERROR_MESSAGES[status] ?? "Ocurrió un error inesperado";

   return Promise.reject({ status, message });

  }
);