import mongoose from "mongoose";

const sectionSchema5 = new mongoose.Schema({
  label: { type: String, required: [true, "label required"] },
  paragraph: { type: String, required: [true, "paragraph required"] },
  images: { type: Array, required: [true, "images required"] },
});
const Section5 = mongoose.model("Section5", sectionSchema5);
export default Section5;
