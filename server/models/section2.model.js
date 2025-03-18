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
  title1: { type: String, required: [true, "title1 required"] },
  color1: { type: String, required: [true, "color1 required"] },
  title2: { type: String, required: [true, "title2 required"] },
  color2: { type: String, required: [true, "color2 required"] },
  title3: { type: String, required: [true, "title3 required"] },
  color3: { type: String, required: [true, "color3 required"] },
  title4: { type: String, required: [true, "title4 required"] },
  color4: { type: String, required: [true, "color4 required"] },
});
const Section2 = mongoose.model("Section2", sectionSchema2);
export default Section2;
