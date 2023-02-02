import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_PRODUCTION_URI);
    console.log(`MongoDB Connected: ${db.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold.underline);
    process.exit(1);
  }
};

export default connectDB;
