import getGroupDay from "@/helpers/parseTimetableDay/getGroupDay";
import { TimeTableReqParams, TimetableResBody } from "@/types/timetable";
import { Table } from "@wulkanowy/timetable-parser";
import { RequestHandler } from "express";

type TimetableRequestHandler = RequestHandler<
  TimeTableReqParams,
  TimetableResBody
>;

export const getTimetable: TimetableRequestHandler = async (req, res, next) => {
  const { group, classId } = req.params;
  const fileURL = `http://www.zstrzeszow.pl/plan/plany/o${classId}.html`;
  const response = await fetch(fileURL);
  const fileData = await response.text();
  const timetable = new Table(fileData).getDays();
  res.send({ timetable: getGroupDay(timetable[0], Number(group)) });
};
