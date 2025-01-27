import express from "express";
import cors from "cors";
import { infoRouter, timetableRouter } from "./routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express());
app.use(cors({}));
app.use(express.json());

app.use("/timetable", timetableRouter);
app.use("/info", infoRouter);
app.listen(port, () => {
  console.log("(LOG) SERVER STARTED: PORT: ", port);
});
