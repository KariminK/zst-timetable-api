import { getTimetableDay } from "@/controllers/timetable.controller";
import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/timetable/:classId/:group", getTimetableDay);

export default indexRouter;
