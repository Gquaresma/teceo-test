import { Request } from "express";
import AddressService from "../services/AddressService";
import Controller from "./Controller";
import IService from "../types/service";
import { errorResponses } from "../helpers/errorResponse";
import { badRequest, success } from "../helpers/httpResponse";

class AddresController extends Controller {
  constructor(service: IService) {
    super(service);
  }

  async findUnique(req: Request) {
    try {
      const { cep } = req.body;
      const underscoreRegex = /_/;

      if (cep.length !== 9 || underscoreRegex.test(cep)) {
        return badRequest("CEP inválido");
      }

      return success(await this.service.findUnique(cep));
    } catch (error) {
      return errorResponses(error);
    }
  }
}

export default new AddresController(AddressService);
