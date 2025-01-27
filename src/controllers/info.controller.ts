import fetchList from "@/helpers/fetchList";
import { RequestHandler } from "express";

const getClassNames: RequestHandler = async (req, res) => {
  const list = await fetchList();
  res.send(list.classes);
};

export default { getClassNames };
