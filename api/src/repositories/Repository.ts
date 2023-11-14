import { EntityManager } from "@mikro-orm/core";
import IRepository from "../types/repository";
import { createId } from "@paralleldrive/cuid2";

abstract class Repository implements IRepository {
  protected connection: Promise<EntityManager>;
  protected entityName: string;

  constructor(connection: Promise<EntityManager>, entityName: string) {
    this.connection = connection;
    this.entityName = entityName;
  }

  async create(data: any): Promise<any> {
    try {
      const connection = await this.connection;

      const objects = data.map((item: any) => ({
        ...item,
        id: createId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

      await connection.transactional(async (em) =>
        em.insertMany(this.entityName, objects)
      );

      return objects;
    } catch (error) {
      console.log(error);
    }
  }

  async findUnique(condition = {}, fields: any[] = ["*"]): Promise<any | null> {
    try {
      return await (
        await this.connection
      ).findOneOrFail(this.entityName, condition, {
        fields,
        refresh: true,
        disableIdentityMap: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findMany(
    condition = {},
    fields: any[] = ["*"],
    options: any = { orderBy: { createdAt: "DESC" } }
  ): Promise<any[]> {
    try {
      return await (
        await this.connection
      ).find(this.entityName, condition, {
        ...options,
        fields,
        refresh: true,
        disableIdentityMap: true,
      });
    } catch (error) {
      console.log(error);
      return []
    }
  }
}
export default Repository;
