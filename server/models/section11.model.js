import mongoose from "mongoose";

const sectionSchema11 = new mongoose.Schema({
  about: { type: String, required: [true, "about required"] },
  header: { type: String, required: [true, "header required"] },
  span: { type: String, required: [true, "span required"] },
  blogPosts: { type: Array, required: [true, "blogPosts required"] },
});
const Section11 = mongoose.model("Section11", sectionSchema11);
export default Section11;
