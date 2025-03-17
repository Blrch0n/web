import mongoose from "mongoose";
const sectionSchema3 = new mongoose.Schema({
  header: { type: String, required: [true, "header required"] },
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
});
const Section3 = mongoose.model("Section3", sectionSchema3);
export default Section3;
  