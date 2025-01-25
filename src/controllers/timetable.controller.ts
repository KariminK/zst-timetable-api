import fetchTimetable from "@/helpers/fetchTimetable";
import getGroupDay from "@/helpers/getGroupDay";
import {
  TimeTableDayReqParams,
  TimetableDayReqQuery,
  TimetableDayResBody,
  TimetableError,
} from "@/types/timetable";
import { RequestHandler } from "express";

type TimetableDayRequestHandler = RequestHandler<
  TimeTableDayReqParams,
  TimetableDayResBody | TimetableError,
  unknown,
  TimetableDayReqQuery
>;

export const getTimetableDay: TimetableDayRequestHandler = async (req, res) => {
  const { group, classId } = req.params;
  const day = Number(req.query.day);
  if (!day || day > 4 || day < 0) {
    res.status(400).send({ status: 400, msg: "Invalid day provided" });
    return;
  }
  const fullTimetable = await fetchTimetable(classId);
  const dayTimetable = getGroupDay(fullTimetable[Number(day)], Number(group));
  if (dayTimetable.length === 0) {
    res.status(404).send({ status: 404, msg: "Not Found" });
    return;
  }
  res.send({ timetable: dayTimetable });
};
