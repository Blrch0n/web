import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sectionsRouter from "./routes/sections.routes.js";
import connectToDataBase from "./database/mongodb.js";

const app = express();
const PORT = 5000; // Express runs on port 5000

app.use(cors());
app.use(bodyParser.json());

app.use("/", sectionsRouter);

app.listen(PORT, async () => {
  console.log(`Express server running on http://localhost:${PORT}`);
  await connectToDataBase();
});
