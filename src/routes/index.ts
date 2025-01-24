import { getTimetable } from "@/controllers/timetable.controller";
import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/timetable/:classId/:group", getTimetable);

export default indexRouter;
