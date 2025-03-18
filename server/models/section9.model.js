import mongoose from "mongoose";

const sectionSchema9 = new mongoose.Schema({
  number1: { type: String, required: [true, "number1 required"] },
  label1: { type: String, required: [true, "label1 required"] },
  number2: { type: String, required: [true, "number2 required"] },
  label2: { type: String, required: [true, "label2 required"] },
  number3: { type: String, required: [true, "number3 required"] },
  label3: { type: String, required: [true, "label3 required"] },
  number4: { type: String, required: [true, "number4 required"] },
  label4: { type: String, required: [true, "label4 required"] },
});
const Section9 = mongoose.model("Section9", sectionSchema9);
export default Section9;
