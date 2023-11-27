import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Database connected on ${connect.connection.host} ${connect.connection.name}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
