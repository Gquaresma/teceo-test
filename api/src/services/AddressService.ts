import Service from "./Service";
import AddresRepository from "../repositories/AddresRepository";
import IRepository from "../types/repository";
import { addressDTO } from "../types/address";
import CepApiService from "./CepApiService";

class AddressService extends Service {
  constructor(repo: IRepository) {
    super(repo);
  }

  async save(data: addressDTO) {
    return super.save([data]);
  }

  async findUnique(cep: string) {
    const data = await super.findUnique(cep);

    if (!data) {
      const address = await CepApiService.getCep(cep);

      return this.save(address);
    }

    return data;
  }
}

export default new AddressService(AddresRepository);
