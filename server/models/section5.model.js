import mongoose from "mongoose";

const sectionSchema5 = new mongoose.Schema({
  label: { type: String, required: [true, "label required"] },
  paragraph: { type: String, required: [true, "paragraph required"] },
  image1: { type: String, required: [true, "image1 required"] },
  image2: { type: String, required: [true, "image2 required"] },
  image3: { type: String, required: [true, "image3 required"] },
  image4: { type: String, required: [true, "image4 required"] },
  image5: { type: String, required: [true, "image5 required"] },
  image6: { type: String, required: [true, "image6 required"] },
});
const Section5 = mongoose.model("Section5", sectionSchema5);
export default Section5;
