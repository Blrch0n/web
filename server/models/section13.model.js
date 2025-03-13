import mongoose from "mongoose";

const sectionSchema13 = new mongoose.Schema({
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
  paragraph: { type: String, required: [true, "header required"] },
  placeholder: { type: String, required: [true, "span required"] },
  button_label: { type: String, required: [true, "paragraph required"] },
  header1: { type: String, required: [true, "button_label required"] },
  header2: { type: String, required: [true, "button_label required"] },
  instagramImages: { type: Array, required: [true, "button_label required"] },
  Section13_data: { type: Array, required: [true, "Section13_data required"] },
});
const Section13 = mongoose.model("Section13", sectionSchema13);
export default Section13;
