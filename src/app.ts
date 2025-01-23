import express from "express";
import cors from "cors";
const app = express();
import { Table } from "@wulkanowy/timetable-parser";
import parseTimetableDay from "./helpers/parseTimetableDay/parseTimetableDay";

app.use(express());
app.use(cors({}));

app.get("/", async (req, res) => {
  const fileURL = `http://www.zstrzeszow.pl/plan/plany/o13.html`;
  const response = await fetch(fileURL);
  const fileData = await response.text();
  const timetable = new Table(fileData).getDays();
  res.send(parseTimetableDay(timetable[0]));
});
app.listen(3001, () => {
  console.log("(LOG) SERVER STARTED: PORT: 3001");
});
