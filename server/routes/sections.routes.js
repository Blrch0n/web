import { Router } from "express";
import {
  getSection1,
  getSection10,
  getSection11,
  getSection12,
  getSection13,
  getSection2,
  getSection3,
  getSection4,
  getSection5,
  getSection6,
  getSection7,
  getSection8,
  getSection9,
  postSection1,
  postSection10,
  postSection11,
  postSection12,
  postSection13,
  postSection2,
  postSection3,
  postSection4,
  postSection5,
  postSection6,
  postSection7,
  postSection8,
  postSection9,
} from "../controllers/section.controller.js";

const sectionsRouter = Router();

sectionsRouter.post("/1", postSection1);
sectionsRouter.get("/1", getSection1);
sectionsRouter.post("/2", postSection2);
sectionsRouter.get("/2", getSection2);
sectionsRouter.post("/3", postSection3);
sectionsRouter.get("/3", getSection3);
sectionsRouter.post("/4", postSection4);
sectionsRouter.get("/4", getSection4);
sectionsRouter.post("/5", postSection5);
sectionsRouter.get("/5", getSection5);
sectionsRouter.post("/6", postSection6);
sectionsRouter.get("/6", getSection6);
sectionsRouter.post("/7", postSection7);
sectionsRouter.get("/7", getSection7);
sectionsRouter.post("/8", postSection8);
sectionsRouter.get("/8", getSection8);
sectionsRouter.post("/9", postSection9);
sectionsRouter.get("/9", getSection9);
sectionsRouter.post("/10", postSection10);
sectionsRouter.get("/10", getSection10);
sectionsRouter.post("/11", postSection11);
sectionsRouter.get("/11", getSection11);
sectionsRouter.post("/12", postSection12);
sectionsRouter.get("/12", getSection12);
sectionsRouter.post("/13", postSection13);
sectionsRouter.get("/13", getSection13);

export default sectionsRouter;
