import { Migration } from '@mikro-orm/migrations';

export class Migration20231114184754 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Address" ("id" varchar(255) not null, "cep" varchar(255) not null, "logradouro" varchar(255) not null, "complemento" varchar(255) not null, "bairro" varchar(255) not null, "localidade" varchar(255) not null, "uf" varchar(255) not null, "ibge" varchar(255) not null, "gia" varchar(255) not null, "ddd" int not null, "siafi" varchar(255) not null, "createdAt" timestamptz(0) not null default now(), "updatedAt" timestamptz(0) not null default now(), constraint "Address_pkey" primary key ("id"));');
    this.addSql('alter table "Address" add constraint "Address_cep_unique" unique ("cep");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "Address" cascade;');
  }

}
