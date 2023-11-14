import { Request } from "express";
import AddressService from "../services/AddressService";
import Controller from "./Controller";
import IService from "../types/service";

class AddresController extends Controller {
  constructor(service: IService) {
    super(service);
  }

  async findUnique(req: Request) {
    return this.service.findUnique(req.body);
  }
}

export default new AddresController(AddressService);


