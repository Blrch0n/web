import mongoose from "mongoose";

const sectionSchema4 = new mongoose.Schema({
  about: { type: String, required: [true, "about required"] },
  span: { type: String, required: [true, "span required"] },
  header: { type: String, required: [true, "header required"] },
  button_label: { type: String, required: [true, "button_label required"] },
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
});
const Section4 = mongoose.model("Section4", sectionSchema4);
export default Section4;
