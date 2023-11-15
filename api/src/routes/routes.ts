import { Router } from "express";
import DataHandler from "../middlewares/datahandler";
import Addres from "./address.routes";

const router = Router();

router.use("/address", Addres);
router.use(DataHandler);

export default router;
