import mongoose from "mongoose";

const sectionSchema6 = new mongoose.Schema({
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
  about: { type: String, required: [true, "about required"] },
  header: { type: String, required: [true, "header required"] },
  span: { type: String, required: [true, "paragraph required"] },
  title1: { type: String, required: [true, "button_label required"] },
  title2: { type: String, required: [true, "button_label required"] },
  title3: { type: String, required: [true, "button_label required"] },
  title4: { type: String, required: [true, "button_label required"] },
  title5: { type: String, required: [true, "button_label required"] },
  title6: { type: String, required: [true, "button_label required"] },
});
const Section6 = mongoose.model("Section6", sectionSchema6);
export default Section6;
