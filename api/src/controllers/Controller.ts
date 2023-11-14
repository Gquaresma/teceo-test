import { Request } from "express";
import IController from "../types/controller";
import IService from "../types/service";

abstract class Controller implements IController {
  protected service: IService;

  constructor(service: IService) {
    this.service = service;
  }

  async create({body}: Request) {
    return this.service.save(body);
  }

  async findUnique({body}: Request) {
    return this.service.findUnique(body);
  }

  async findMany({query}: Request) {
    return this.service.findMany(query);
  }
}

export default Controller;
