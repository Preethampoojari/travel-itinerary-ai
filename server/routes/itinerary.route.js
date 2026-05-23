import express from "express";

import {
  createItinerary,
  getAllItineraries,
  getSingleItinerary,
  updateItinerary,
  deleteItinerary,
} from "../controllers/itinerary.controller.js";

import { authenticate } from "../middleware/authorize.js";

import upload from "../utils/upload.js";

const router = express.Router();

router.post(
  "/create",
  authenticate,
  upload.single("document"),
  createItinerary,
);

router.get("/all", authenticate, getAllItineraries);

router.get("/:id", authenticate, getSingleItinerary);

router.put("/update/:id", authenticate, updateItinerary);

router.delete("/delete/:id", authenticate, deleteItinerary);

export default router;
