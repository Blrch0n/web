import mongoose from "mongoose";

const sectionSchema9 = new mongoose.Schema({
  labels: { type: Array, required: [true, "labels required"] },
});
const Section9 = mongoose.model("Section9", sectionSchema9);
export default Section9;
