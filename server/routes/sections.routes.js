import { Router } from "express";

const sectionsRouter = Router();

sectionsRouter.get("/", (req, res) => {
  res.send("GET /sections");
});

export default sectionsRouter;
