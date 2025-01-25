import { emptyLesson, Lesson } from "./lesson";

export interface TimeTableDayReqParams {
  classId: number;
  group: number;
}

export interface TimetableDayResBody {
  timetable: (Lesson | emptyLesson)[];
}

export type TimetableDayReqQuery = {
  day: string;
};

export interface TimetableError {
  status: number;
  msg: string;
}
