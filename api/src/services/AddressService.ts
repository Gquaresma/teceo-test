import Service from "./Service";
import AddresRepository from "../repositories/AddresRepository";
import IRepository from "../types/repository";
import { addressDTO } from "../types/address";
import CepApiService from "./CepApiService";
import { NotFoundError } from "../errors/NotFoundError";

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

    if (data) return data;

    const address = await CepApiService.getCep(originalCep);

    if (address.erro) throw new NotFoundError("CEP não encontrado");

    return this.save(address);
  }
}

export default new AddressService(AddresRepository);
