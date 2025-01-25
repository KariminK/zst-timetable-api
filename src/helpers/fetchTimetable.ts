import { Table } from "@wulkanowy/timetable-parser";

export default async function fetchTimetable(classId: number) {
  const fileURL = `http://www.zstrzeszow.pl/plan/plany/o${classId}.html`;
  const response = await fetch(fileURL);
  const fileData = await response.text();
  const timetable = new Table(fileData).getDays();
  return timetable;
}
