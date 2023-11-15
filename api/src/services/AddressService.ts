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

  async findUnique(originalCep: string) {
    const cepWithHifen = originalCep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

    const data = await super.findUnique({ cep: cepWithHifen });

    if (!data) {
      const address = await CepApiService.getCep(originalCep);

      return this.save(address);
    }

    return data;
  }
}

export default new AddressService(AddresRepository);
