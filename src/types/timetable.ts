import { emptyLesson, Lesson } from "./lesson";

export interface TimeTableReqParams {
  classId: string;
  group: string;
}

export interface TimetableDayResBody {
  timetable: (Lesson | emptyLesson)[];
}

export type TimetableDayReqQuery = {
  day?: string;
};

export interface TimetableError {
  status: number;
  msg: string;
}

export interface TimetableResBody {
  timetable: (Lesson | emptyLesson)[][];
}
