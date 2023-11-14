import AxiosClient from "../helpers/AxiosClient";

class CepApiService {
  private axiosClient: AxiosClient;

  constructor() {
    this.axiosClient = new AxiosClient("https://viacep.com.br/ws/");
  }

  async getCep(cep: string) {
    return this.axiosClient.get(`${cep}/json`);
  }
}

export default new CepApiService();