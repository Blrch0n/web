import mongoose from "mongoose";

const sectionSchema1 = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "image required"],
  },
  background: {
    type: String,
    required: [true, "image required"],
  },
  header: { type: String, required: [true, "header required"] },
  paragraph: { type: String, required: [true, "paragraph required"] },
  button_label: { type: String, required: [true, "button_label required"] },
});
const Section1 = mongoose.model("Section1", sectionSchema1);
export default Section1;
