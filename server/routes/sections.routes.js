import { Router } from "express";
import {
  deleteAllSection1,
  deleteAllSection2,
  deleteAllSection3,
  deleteAllSection4,
  deleteAllSection5,
  deleteAllSection6,
  deleteAllSection7,
  deleteAllSection8,
  deleteAllSection9,
  deleteAllSection10,
  deleteAllSection11,
  deleteAllSection12,
  deleteAllSection13,
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
  getAboutUsSection1,
  postAboutUsSection1,
  deleteAboutUsSection1,
  getAboutUsSection2,
  postAboutUsSection2,
  deleteAboutUsSection2,
  getAboutUsSection3,
  postAboutUsSection3,
  deleteAboutUsSection3,
  getBlog,
  deleteBlog,
  postBlog,
  postPortfolio,
  getPortfolio,
  deletePortfolio,
} from "../controllers/section.controller.js";

const sectionsRouter = Router();

sectionsRouter.post("/1", postSection1);
sectionsRouter.get("/1", getSection1);
sectionsRouter.delete("/1", deleteAllSection1);
sectionsRouter.post("/2", postSection2);
sectionsRouter.get("/2", getSection2);
sectionsRouter.delete("/2", deleteAllSection2);
sectionsRouter.post("/3", postSection3);
sectionsRouter.get("/3", getSection3);
sectionsRouter.delete("/3", deleteAllSection3);
sectionsRouter.post("/4", postSection4);
sectionsRouter.get("/4", getSection4);
sectionsRouter.delete("/4", deleteAllSection4);
sectionsRouter.post("/5", postSection5);
sectionsRouter.get("/5", getSection5);
sectionsRouter.delete("/5", deleteAllSection5);
sectionsRouter.post("/6", postSection6);
sectionsRouter.get("/6", getSection6);
sectionsRouter.delete("/6", deleteAllSection6);
sectionsRouter.post("/7", postSection7);
sectionsRouter.get("/7", getSection7);
sectionsRouter.delete("/7", deleteAllSection7);
sectionsRouter.post("/8", postSection8);
sectionsRouter.get("/8", getSection8);
sectionsRouter.delete("/8", deleteAllSection8);
sectionsRouter.post("/9", postSection9);
sectionsRouter.get("/9", getSection9);
sectionsRouter.delete("/9", deleteAllSection9);
sectionsRouter.post("/10", postSection10);
sectionsRouter.get("/10", getSection10);
sectionsRouter.delete("/10", deleteAllSection10);
sectionsRouter.post("/11", postSection11);
sectionsRouter.get("/11", getSection11);
sectionsRouter.delete("/11", deleteAllSection11);
sectionsRouter.post("/12", postSection12);
sectionsRouter.get("/12", getSection12);
sectionsRouter.delete("/12", deleteAllSection12);
sectionsRouter.post("/13", postSection13);
sectionsRouter.get("/13", getSection13);
sectionsRouter.delete("/13", deleteAllSection13);
sectionsRouter.post("/about-us/1", postAboutUsSection1);
sectionsRouter.get("/about-us/1", getAboutUsSection1);
sectionsRouter.delete("/about-us/1", deleteAboutUsSection1);
sectionsRouter.post("/about-us/2", postAboutUsSection2);
sectionsRouter.get("/about-us/2", getAboutUsSection2);
sectionsRouter.delete("/about-us/2", deleteAboutUsSection2);
sectionsRouter.post("/about-us/3", postAboutUsSection3);
sectionsRouter.get("/about-us/3", getAboutUsSection3);
sectionsRouter.delete("/about-us/3", deleteAboutUsSection3);
sectionsRouter.post("/blog", postBlog);
sectionsRouter.get("/blog", getBlog);
sectionsRouter.delete("/blog", deleteBlog);
sectionsRouter.post("/portfolio", postPortfolio);
sectionsRouter.get("/portfolio", getPortfolio);
sectionsRouter.delete("/portfolio", deletePortfolio);

export default sectionsRouter;
