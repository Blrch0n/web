import mongoose from "mongoose";
const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://1:1@cluster0.jkc3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};
export default connectToDataBase;
