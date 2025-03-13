import mongoose from "mongoose";

const sectionSchema10 = new mongoose.Schema({
  background_image: {
    type: String,
    required: [true, "background_image required"],
  },
  teamMembers: { type: Array, required: [true, "teamMembers required"] },
});
const Section10 = mongoose.model("Section10", sectionSchema10);
export default Section10;
