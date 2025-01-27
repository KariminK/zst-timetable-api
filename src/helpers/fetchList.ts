import { TimetableList } from "@wulkanowy/timetable-parser";

export default async function fetchList() {
  const fileURL = `http://www.zstrzeszow.pl/plan/lista.html`;
  const response = await fetch(fileURL);
  const fileData = await response.text();
  const list = new TimetableList(fileData).getList();
  return list;
}
