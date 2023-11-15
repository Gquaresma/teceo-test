import { Router } from "express";
import AddressController from "../controllers/AddressController";

const router = Router();

router.post("/", async (req, _res, next) =>
  next(await AddressController.findUnique(req))
);

export default router;
