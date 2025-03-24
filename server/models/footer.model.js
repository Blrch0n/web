import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  logo_image: {
    type: String,
    required: [true, "logo_image required"],
  },
  paragraph: { type: String, required: [true, "paragraph required"] },
  images: { type: Array, required: [true, "images required"] },
  span: { type: String, required: [true, "span required"] },
  about_1: { type: String, required: [true, "about required"] },
  about_list: { type: Array, required: [true, "about_list required"] },
  about_2: { type: String, required: [true, "about required"] },
  input_label1: { type: String, required: [true, "input_label1 required"] },
  input_label2: { type: String, required: [true, "input_label2 required"] },
  button_label: { type: String, required: [true, "button_label required"] },
});
const Footer = mongoose.model("Footer", footerSchema);
export default Footer;
