import { infoController } from "@/controllers";
import { Router } from "express";

const infoRouter = Router();

infoRouter.get("/classes", infoController.getClassNames);

export default infoRouter;
