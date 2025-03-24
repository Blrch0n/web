import mongoose from "mongoose";
const newSchema = new mongoose.Schema({
  background: { type: String, required: [true, "background required"] },
  image: { type: String, required: [true, "image required"] },
  about: { type: String, required: [true, "about required"] },
  span: { type: String, required: [true, "span required"] },
  header: { type: String, required: [true, "header required"] },
  jobs: { type: Array, required: [true, "jobs required"] },
});
const AboutUsSection3 = mongoose.model("AboutUsSection3", newSchema);
export default AboutUsSection3;
