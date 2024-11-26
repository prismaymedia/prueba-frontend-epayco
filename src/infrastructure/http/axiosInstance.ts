import axios from "axios";
import { requestInterceptor } from "./interceptors/requestInterceptor";
import { responseInterceptor, responseErrorInterceptor } from "./interceptors/responseInterceptor";
const API_URL = process.env.API_URL;
// console.log("API_URL ", API_URL)

// Crear una instancia personalizada de Axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

// Configurar interceptores
axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default axiosInstance;
