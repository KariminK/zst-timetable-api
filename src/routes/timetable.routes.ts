import { timetableController } from "@/controllers";
import { Router } from "express";
const timetableRouter = Router();

timetableRouter.get("/:classId/:group", (req, res, next) => {
  if (req.query.day) timetableController.getTimetableDay(req, res, next);
  else timetableController.getTimetable(req, res, next);
});

export default timetableRouter;
