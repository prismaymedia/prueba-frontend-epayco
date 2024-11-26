import { AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorInterceptor = (error: any) => {
  if (error.response?.status === 401) {
    window.location.href = "/home";
  }
  return Promise.reject(error);
};
