import mongoose from "mongoose";

const sectionSchema12 = new mongoose.Schema({
  background: { type: String, required: [true, "background required"] },
  header1: { type: String, required: [true, "header1 required"] },
  paragraph1: { type: String, required: [true, "paragraph1 required"] },
  header2: { type: String, required: [true, "header2 required"] },
  paragraph2: { type: String, required: [true, "paragraph2 required"] },
  header3: { type: String, required: [true, "header3 required"] },
  button1_label: { type: String, required: [true, "button1_label required"] },
  button2_label: { type: String, required: [true, "button2_label required"] },
  button3_label: { type: String, required: [true, "button3_label required"] },
  button_label: { type: String, required: [true, "button_label required"] },
});
const Section12 = mongoose.model("Section12", sectionSchema12);
export default Section12;
