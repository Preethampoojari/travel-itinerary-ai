import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "../server/routes/user.route.js";
import itineraryRoute from "./routes/itinerary.route.js";
import shareRoutes from "./routes/share.route.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Database connection
await connectDB();

// routes
app.use("/user", userRoute);
app.use("/itinerary", itineraryRoute);
app.use("/share", shareRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
