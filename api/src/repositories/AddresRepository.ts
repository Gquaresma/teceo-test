import Repository from "./Repository";
import { Address } from "../database/models/AddressModel";
import Database from "../database/Connection";

class AddressRepository extends Repository {}

export default new AddressRepository(Database.getConnection(), Address.name);
