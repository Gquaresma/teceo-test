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
    const data = await super.findUnique({ cep: originalCep });

    const cepWithoutHifen = originalCep.replace(/-/g, "");

    if (data) return [data];

    const address = await CepApiService.getCep(cepWithoutHifen);

    if (address.erro) throw new NotFoundError("CEP não encontrado");

    return this.save(address);
  }
}

export default new AddressService(AddresRepository);
