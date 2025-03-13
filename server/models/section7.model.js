import mongoose from "mongoose";

const sectionSchema7 = new mongoose.Schema({
  image: { type: String, required: [true, "image required"] },
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
  header: { type: String, required: [true, "header required"] },
  span: { type: String, required: [true, "span required"] },
  paragraph: { type: String, required: [true, "paragraph required"] },
  lists: { type: Array, required: [true, "lists required"] },
  button_label: { type: String, required: [true, "button_label required"] },
});
const Section7 = mongoose.model("Section7", sectionSchema7);
export default Section7;
