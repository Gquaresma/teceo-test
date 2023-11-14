import { EntityManager, MikroORM } from "@mikro-orm/core";
import options from "../mikro-orm.config";

class Database {
  private conncection: Promise<MikroORM>;

  constructor() {
    this.conncection = MikroORM.init(options);
  }

  public async getConnection(): Promise<EntityManager> {
    return (await this.conncection)?.em;
  }
}

export default new Database();