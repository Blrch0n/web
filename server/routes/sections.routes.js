import { Router } from "express";
import {
  getSection1,
  getSection2,
  postSection1,
  postSection2,
} from "../controllers/section.controller.js";

const sectionsRouter = Router();

sectionsRouter.post("/", postSection1);
sectionsRouter.get("/", getSection1);
sectionsRouter.post("/2", postSection2);
sectionsRouter.get("/2", getSection2);

export default sectionsRouter;
