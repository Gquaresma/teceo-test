import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  async get(url: string) {
    try {
      const response = await this.instance.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default AxiosClient;
