import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import adminRoute from './routes/adminRoute.js'
import vendorRoute from './routes/venderRoute.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { cloudinaryConfig } from "./utils/cloudinaryConfig.js";


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

const corsOrigins = process.env.CORS 
  ? process.env.CORS.split(',').map(origin => origin.trim())
  : ['https://rent-a-ride-two.vercel.app', 'http://localhost:5173'];


  console.log(corsOrigins)

// App.use(cors({
//   origin: function (origin, callback) {
//     console.log('Incoming Request Origin:', origin);

//     // Allow requests with no origin (mobile apps, cURL)
//     if (!origin) return callback(null, true);

//     // Check if the origin is allowed
//     if (corsOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error('CORS Error: Origin not allowed:', origin);
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// }));

App.use(cors({
  origin:"*"
}))


App.use('*', cloudinaryConfig);

// App.get('/*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));


App.use("/api/user", userRoute);
App.use("/api/auth", authRoute);
App.use("/api/admin",adminRoute);
App.use("/api/vendor",vendorRoute)



App.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    succes: false,
    message,
    statusCode,
  });
});
