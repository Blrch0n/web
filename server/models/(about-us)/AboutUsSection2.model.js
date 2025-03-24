import { mongoose } from "mongoose";

const newSchema = new mongoose.Schema({
  background: { type: String, required: [true, "background required"] },
  image: { type: String, required: [true, "image required"] },
  about: { type: String, required: [true, "about required"] },
  span: { type: String, required: [true, "span required"] },
  header: { type: String, required: [true, "header required"] },
  paragraph: { type: String, required: [true, "paragraph required"] },
  button_label: { type: String, required: [true, "button_label required"] },
  progresses: {
    type: Array,
    required: [true, "progresses required"],
  },
});
const AboutUsSection2 = mongoose.model("AboutUsSection2", newSchema);
export default AboutUsSection2;
