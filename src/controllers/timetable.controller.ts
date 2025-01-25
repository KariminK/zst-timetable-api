import fetchTimetable from "@/helpers/fetchTimetable";
import getGroupDay from "@/helpers/getGroupDay";
import {
  TimeTableReqParams,
  TimetableDayReqQuery,
  TimetableDayResBody,
  TimetableError,
  TimetableResBody,
} from "@/types/timetable";
import { RequestHandler } from "express";

type TimetableRequestHandler = RequestHandler<
  TimeTableReqParams,
  TimetableResBody | TimetableError
>;

type TimetableDayRequestHandler = RequestHandler<
  TimeTableReqParams,
  TimetableDayResBody | TimetableError,
  unknown,
  TimetableDayReqQuery
>;

export const getTimetable: TimetableRequestHandler = async (req, res, next) => {
  const { group, classId } = req.params;
  const fullTimetable = await fetchTimetable(Number(classId));
  const parsedTimetable = fullTimetable.map((day) =>
    getGroupDay(day, Number(group))
  );
  if (parsedTimetable[0].length === 0) {
    res.status(404).send({ status: 404, msg: "Not Found" });
    return;
  }
  res.send({ timetable: parsedTimetable });
};

export const getTimetableDay: TimetableDayRequestHandler = async (req, res) => {
  const { group, classId } = req.params;
  const day = Number(req.query.day);
  if (day > 4 || day < 0) {
    res.status(400).send({ status: 400, msg: "Invalid day provided" });
    return;
  }
  const fullTimetable = await fetchTimetable(Number(classId));
  const dayTimetable = getGroupDay(fullTimetable[Number(day)], Number(group));
  if (dayTimetable.length === 0) {
    res.status(404).send({ status: 404, msg: "Not Found" });
    return;
  }
  res.send({ timetable: dayTimetable });
};
