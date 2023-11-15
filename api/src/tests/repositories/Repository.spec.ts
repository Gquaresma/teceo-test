import { makeSutRepo, mockDB } from "../mock/repository";
import { NotFoundError } from "../../errors/NotFoundError";
import { DatabaseError } from "../../errors/DatabaseError";

jest.mock("../../errors/DatabaseError", () => {
  databaseError: jest.fn().mockReturnValue(new DatabaseError("erro"));
});

describe("Repository", () => {
  describe("create", () => {
    it("should create a new entity", async () => {
      const data = [{ cep: "12345678" }];
      const res = await makeSutRepo(mockDB).create(data);

      expect(res).toEqual([
        {
          cep: "12345678",
          id: expect.any(String),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ]);
    });
  });
});
