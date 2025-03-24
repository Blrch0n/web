import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
  images: { type: Array, required: [true, "images required"] },
});
const Portfolio1 = mongoose.model("Portfolio1", newSchema);
export default Portfolio1;
