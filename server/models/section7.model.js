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
  list1: { type: String, required: [true, "list1 required"] },
  list2: { type: String, required: [true, "list2 required"] },
  list3: { type: String, required: [true, "list3 required"] },
  list4: { type: String, required: [true, "list4 required"] },
  button_label: { type: String, required: [true, "button_label required"] },
});
const Section7 = mongoose.model("Section7", sectionSchema7);
export default Section7;
