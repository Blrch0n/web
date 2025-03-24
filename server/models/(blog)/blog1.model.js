import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
  images: { type: Array, required: [true, "images required"] },
});
const Blog1 = mongoose.model("Blog1", newSchema);
export default Blog1;
