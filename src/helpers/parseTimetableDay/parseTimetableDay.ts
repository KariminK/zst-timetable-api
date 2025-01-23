import { Lesson } from "../../types/lesson";

const parseTimetableDay = (lessonDay: Lesson[][]) => {
  const simplifiedLessonDay = lessonDay
    .map((groupedLessons) => {
      if (groupedLessons.length === 0) return { empty: true };
      else return groupedLessons;
    })
    .flat();
  return simplifiedLessonDay;
};
export default parseTimetableDay;
