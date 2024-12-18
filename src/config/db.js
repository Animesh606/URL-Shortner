import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;
