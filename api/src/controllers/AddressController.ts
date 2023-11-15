import { Request } from "express";
import AddressService from "../services/AddressService";
import Controller from "./Controller";
import IService from "../types/service";
import { errorResponses } from "../helpers/errorResponse";
import { success } from "../helpers/httpResponse";
import { Console } from "console";

class AddresController extends Controller {
  constructor(service: IService) {
    super(service);
  }

  async findUnique(req: Request) {
    try {
      const { cep } = req.body;

      return success(await this.service.findUnique(cep));
  
    } catch (error) {
      console.log(error);
      return errorResponses(error);
    }
  }
}

export default new AddresController(AddressService);
