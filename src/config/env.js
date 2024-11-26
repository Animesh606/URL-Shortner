import dotenv from "dotenv";

dotenv.config();

const env = {
    PORT: process.env.PORT || 5000,
    BASE_URL: process.env.BASE_URL || "http://localhost:5000",
    MONGO_URI: process.env.MONGO_URI,
};

export default env;
