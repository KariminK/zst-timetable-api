import { emptyLesson, Lesson } from "../../types/lesson";

type flatTimetableDay = (Lesson | emptyLesson)[];

const parseGroupNumber = (groupName: string) => Number(groupName.split("/")[0]);
const filterGroupLesson = (groupedLessons: Lesson[], group: number) => {
  console.log("group filter start:", groupedLessons);
  return groupedLessons.filter((lesson) => {
    if ("groupName" in lesson && lesson.groupName) {
      const groupNumber = parseGroupNumber(lesson.groupName);
      console.log("group number: ", groupNumber);
      console.log("group: ", group);
      return groupNumber === group;
    }
  });
};

const getGroupDay = (
  lessonDay: Lesson[][],
  group: number
): flatTimetableDay => {
  const simplifiedLessonDay = lessonDay
    .map((groupedLessons) => {
      switch (groupedLessons.length) {
        case 0:
          return { empty: true };
        case 1:
          if (
            !("groupName" in groupedLessons[0] && groupedLessons[0].groupName)
          )
            return groupedLessons;
          else if (parseGroupNumber(groupedLessons[0].groupName) === group)
            return groupedLessons[0];
          else return { empty: true };
        case 2:
          console.log(filterGroupLesson(groupedLessons, group));
          return filterGroupLesson(groupedLessons, group);
        default:
          return groupedLessons;
      }
    })
    .flat();
  return simplifiedLessonDay;
};
export default getGroupDay;
