import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ quiet: true, path: "./.env" });
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoDB.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
