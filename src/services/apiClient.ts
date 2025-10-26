import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 10000,
    });
  }

  async get<T>(url: string) {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data: unknown) {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }
}

export default new ApiClient();
