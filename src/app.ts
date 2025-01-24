import express from "express";
import cors from "cors";
import indexRouter from "./routes";
const app = express();

app.use(express());
app.use(cors({}));
app.use(express.json());

app.use("/", indexRouter);
app.listen(3001, () => {
  console.log("(LOG) SERVER STARTED: PORT: 3001");
});
