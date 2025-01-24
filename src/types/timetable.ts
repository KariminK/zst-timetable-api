import { emptyLesson, Lesson } from "./lesson";

export interface TimeTableReqParams {
  classId: number;
  group: number;
}

export interface TimetableResBody {
  timetable: (Lesson | emptyLesson)[];
}
