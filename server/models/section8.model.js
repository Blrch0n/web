import mongoose from "mongoose";

const sectionSchema8 = new mongoose.Schema({
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
  teamMembers: { type: Array, required: [true, "teamMembers required"] },
});
const Section8 = mongoose.model("Section8", sectionSchema8);
export default Section8;
