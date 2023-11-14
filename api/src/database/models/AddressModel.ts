import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { createId } from "@paralleldrive/cuid2";

@Entity()
export class Address {
  @PrimaryKey()
  id: string = createId();

  @Property({ unique: true })
  cep!: string;

  @Property()
  logradouro!: string;

  @Property()
  complemento!: string;

  @Property()
  bairro!: string;

  @Property()
  localidade!: string;

  @Property()
  uf!: string;

  @Property()
  ibge!: string;

  @Property()
  gia!: string;

  @Property()
  ddd!: number;

  @Property()
  siafi!: string;

  @Property({ defaultRaw: "now()" })
  createdAt!: Date;

  @Property({ defaultRaw: "now()" })
  updatedAt!: Date;
}
