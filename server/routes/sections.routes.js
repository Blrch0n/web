import { Router } from "express";
import {
  getSection1,
  getSection2,
  getSection3,
  postSection1,
  postSection2,
} from "../controllers/section.controller.js";

const sectionsRouter = Router();

sectionsRouter.post("/1", postSection1);
sectionsRouter.get("/1", getSection1);
sectionsRouter.post("/2", postSection2);
sectionsRouter.get("/2", getSection2);
sectionsRouter.get("/3", getSection3);

export default sectionsRouter;
