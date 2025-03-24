import mongoose from "mongoose";
const newSchema = new mongoose.Schema({
  background: { type: String, required: [true, "background required"] },
});
const AboutUsSection1 = mongoose.model("AboutUsSection1", newSchema);
export default AboutUsSection1;
