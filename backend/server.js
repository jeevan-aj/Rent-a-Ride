import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from 'cors'
import cookieParser from "cookie-parser";

const App = express();

App.use(express.json());
App.use(cookieParser())

dotenv.config();
const port = 3000;

mongoose
  .connect(process.env.mongo_uri)
  .then(console.log("connected"))
  .catch((error) => console.error(error));

App.listen(port, () => {
  console.log("server listening !");
});

App.use(cors());

App.use("/api/user", userRoute);
App.use("/api/auth", authRoute);

App.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    succes: false,
    message,
    statusCode,
  });
});
