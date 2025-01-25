import {
  getTimetable,
  getTimetableDay,
} from "@/controllers/timetable.controller";
import { TimetableDayReqQuery, TimeTableReqParams } from "@/types/timetable";
import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/timetable/:classId/:group", (req, res, next) => {
  if (req.query.day) getTimetableDay(req, res, next);
  else getTimetable(req, res, next);
});

export default indexRouter;
