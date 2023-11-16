import { Request } from "express";
import AddressService from "../services/AddressService";
import Controller from "./Controller";
import IService from "../types/service";
import { errorResponses } from "../helpers/errorResponse";
import { badRequest, success } from "../helpers/httpResponse";
import { Console } from "console";

class AddresController extends Controller {
  constructor(service: IService) {
    super(service);
  }

  async findUnique(req: Request) {
    try {
      const { cep } = req.body;

      if (cep.length < 9 || cep.length > 9) {
        return badRequest("CEP inválido");
      }

      return success(await this.service.findUnique(cep));
    } catch (error) {
      return errorResponses(error);
    }
  }
}

export default new AddresController(AddressService);
