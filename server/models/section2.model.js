import mongoose from "mongoose";

const sectionSchema2 = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "image required"],
  },
  background: {
    type: String,
    required: [true, "image required"],
  },
  span: { type: String, required: [true, "span required"] },
  header: { type: String, required: [true, "header required"] },
  about: { type: String, required: [true, "about required"] },
  paragraph: { type: String, required: [true, "paragraph required"] },
  button_label: { type: String, required: [true, "button_label required"] },
  jobs: { type: Array, required: [true, "jobs required"] },
});
const Section2 = mongoose.model("Section2", sectionSchema2);
export default Section2;
