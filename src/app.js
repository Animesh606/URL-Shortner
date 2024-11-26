import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import { apiRateLimiter } from "./middlewares/rateLimiter.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(apiRateLimiter);

app.use("/api", urlRoutes);

app.use(errorHandler);

export default app;
